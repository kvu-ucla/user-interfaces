import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'upcoming' })
export class UpcomingPipe implements PipeTransform {
    transform<T extends { event_start: number }>(items: T[] | null | undefined, nowMs?: number): T[] {
        if (!items?.length || !nowMs) return [];
        return items.filter(b => b.event_start * 1000 > nowMs);
    }
}
