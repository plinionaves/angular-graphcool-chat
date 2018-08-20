import { Pipe, PipeTransform } from '@angular/core';

import { AppConfigService } from '../../core/services/app-config.service';

@Pipe({
  name: 'fromNow',
  pure: false
})
export class FromNowPipe implements PipeTransform {

  constructor(
    private appConfig: AppConfigService
  ) {}

  transform(date: string): string {
    return timeDifferenceForDate(date, this.appConfig.timeDifference);
  }

}

function getTimeDifference(current: number, previous: number) {
  const milliSecondsPerMinute = 60 * 1000;
  const milliSecondsPerHour = milliSecondsPerMinute * 60;
  const milliSecondsPerDay = milliSecondsPerHour * 24;
  const milliSecondsPerMonth = milliSecondsPerDay * 30;
  const milliSecondsPerYear = milliSecondsPerDay * 365;

  const elapsed = current - previous;

  if (elapsed < milliSecondsPerMinute / 3) {
    return 'just now';
  }

  if (elapsed < milliSecondsPerMinute) {
    return 'less than 1 min ago';
  } else if (elapsed < milliSecondsPerHour) {
    return Math.round(elapsed / milliSecondsPerMinute) + ' min ago';
  } else if (elapsed < milliSecondsPerDay) {
    return Math.round(elapsed / milliSecondsPerHour) + ' h ago';
  } else if (elapsed < milliSecondsPerMonth) {
    return Math.round(elapsed / milliSecondsPerDay) + ' days ago';
  } else if (elapsed < milliSecondsPerYear) {
    return Math.round(elapsed / milliSecondsPerMonth) + ' mo ago';
  } else {
    return Math.round(elapsed / milliSecondsPerYear) + ' years ago';
  }
}

function timeDifferenceForDate(date: string, timeDifference: number) {
  const now = new Date().getTime() + timeDifference;
  const updated = new Date(date).getTime();
  return getTimeDifference(now, updated);
}
