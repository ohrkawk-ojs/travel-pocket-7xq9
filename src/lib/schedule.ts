import type { TravelDay } from '../data/travel-schedule';

export function getTodayInTimezone(timezone = 'Asia/Seoul') {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: timezone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date());
}

export function getTodaySchedule(days: TravelDay[], today = getTodayInTimezone()) {
  return days.find((day) => day.date === today) ?? null;
}

export function getNextScheduleDay(days: TravelDay[], today = getTodayInTimezone()) {
  return days.find((day) => day.date >= today) ?? null;
}

export function formatKoreanDate(date: string) {
  const [year, month, day] = date.split('-').map(Number);
  const localNoon = new Date(year, month - 1, day, 12, 0, 0);
  return localNoon.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  });
}
