import {
  BehaviorSubject,
  GuestUser,
  SpacePipe,
  addMinutes,
  checkinBooking,
  generateGuestForm,
  getUnixTime,
  i18n,
  isSameDay,
  notifyError,
  notifySuccess,
  queryAllBookings,
  showBooking,
  showGuest,
  updateBookingInductionStatus,
  ɵɵdefineInjectable
} from "./chunk-B3O5SUTN.js";
import {
  __async
} from "./chunk-4MWRP73S.js";

// apps/visitor-kiosk/src/app/checkin/checkin-state.service.ts
var CheckinStateService = class _CheckinStateService {
  constructor() {
    this._booking = new BehaviorSubject(null);
    this._guest = new BehaviorSubject(null);
    this._photo = new BehaviorSubject("");
    this._error = new BehaviorSubject("");
    this._form = new BehaviorSubject(generateGuestForm());
    this._space_pipe = new SpacePipe();
    this.event = this._booking.asObservable();
    this.guest = this._guest.asObservable();
    this.error = this._error.asObservable();
    this.form = this._form.asObservable();
    this.metadata = "";
  }
  clear() {
    this._guest.next(null);
    this._booking.next(null);
    this._photo.next(null);
  }
  setBooking(booking, metadata = "") {
    this._booking.next(booking);
    this._guest.next(new GuestUser({
      email: booking.asset_id,
      name: booking.asset_name,
      organisation: booking.extension_data.organisation,
      phone: booking.extension_data.phone
    }));
    this.metadata = metadata;
  }
  setPhoto(data) {
    this._photo.next(data);
  }
  setError(message) {
    this._error.next(message);
  }
  /** Load guest and event data */
  loadGuestAndEvent(email, event_id) {
    return __async(this, null, function* () {
      const guest = yield showGuest(email).toPromise();
      if (event_id) {
        const event = yield showBooking(event_id).toPromise();
        this._guest.next(guest);
        this._booking.next(event);
        this._form.next(generateGuestForm(guest, event.user_email));
        return { guest, event };
      }
      if (guest.booking) {
        this._guest.next(guest);
        this._booking.next(guest.booking);
        this._form.next(generateGuestForm(guest, guest.booking.user_email));
        return { guest, event: guest.booking };
      }
      let upcoming = yield queryAllBookings({
        type: "visitor",
        period_start: getUnixTime(Date.now()),
        period_end: getUnixTime(addMinutes(Date.now(), 120))
      }).toPromise();
      upcoming = upcoming.filter((_) => _.user_email === email || _.asset_id === email);
      const today = /* @__PURE__ */ new Date();
      const todays_events = upcoming.filter((event) => isSameDay(new Date(event.date), today));
      todays_events.sort((a, b) => a.date - b.date);
      if (todays_events.length <= 0) {
        throw new Error(i18n("VISITOR_KIOSK.NOT_FOUND", { email }));
      }
      this._guest.next(guest);
      this._booking.next(todays_events[0]);
      this._form.next(generateGuestForm(guest, todays_events[0].user_email));
      return { guest, event: todays_events[0] };
    });
  }
  updateGuest(data) {
    return __async(this, null, function* () {
      const guest = this._guest.getValue();
      const form = this._form.getValue();
      if (!guest || !form)
        return;
    });
  }
  completeInduction() {
    return __async(this, null, function* () {
      const guest = this._guest.getValue();
      const event = this._booking.getValue() || guest.extension_data.event;
      if (!guest || !event)
        return;
      yield updateBookingInductionStatus(event.id, "accepted").toPromise();
    });
  }
  declineInduction() {
    return __async(this, null, function* () {
      const guest = this._guest.getValue();
      const event = this._booking.getValue() || guest.extension_data.event;
      if (!guest || !event)
        return;
      yield updateBookingInductionStatus(event.id, "declined").toPromise();
    });
  }
  checkinGuest() {
    return __async(this, null, function* () {
      const guest = this._guest.getValue();
      const event = this._booking.getValue() || guest.extension_data.event;
      if (!guest || !event)
        return;
      const checkin_fn = checkinBooking(event.id, true).toPromise();
      const vars = {
        guest: guest.name,
        host: event.user_name || event.user_email
      };
      const result = yield checkin_fn.catch((e) => __async(this, null, function* () {
        notifyError(e || i18n("VISITOR_KIOSK.ERROR_CHECKIN", vars));
      }));
      if (!result)
        return;
      notifySuccess(i18n("VISITOR_KIOSK.SUCCESS_CHECKIN", vars));
      this.metadata = "";
    });
  }
  printPass() {
    try {
      return new Promise((res) => setTimeout(() => res(""), 5e3));
    } catch (err) {
      notifyError(i18n("VISITOR_KIOSK.ERROR_PRINT"));
    }
    return Promise.reject();
  }
  static {
    this.\u0275fac = function CheckinStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckinStateService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CheckinStateService, factory: _CheckinStateService.\u0275fac, providedIn: "root" });
  }
};

export {
  CheckinStateService
};
//# sourceMappingURL=chunk-ATY4BKEG.js.map
