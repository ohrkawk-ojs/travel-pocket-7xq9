export type TravelScheduleItem = {
  id: string;
  date: string;
  time?: string;
  title: string;
  placeName?: string;
  address?: string;
  googleMapsUrl?: string;
  linkIds?: string[];
  memo?: string;
  important?: boolean;
};

export type TravelDay = {
  date: string;
  dayLabel: string;
  title?: string;
  items: TravelScheduleItem[];
};

export const travelSchedule: TravelDay[] = [
  {
    date: '2026-08-10',
    dayLabel: 'Day 1',
    title: '출발과 체크인',
    items: [
      {
        id: 'day1-airport',
        date: '2026-08-10',
        time: '09:00',
        title: '공항 도착',
        placeName: '인천국제공항',
        address: '인천국제공항',
        memo: '출국 2시간 전 도착 기준 샘플 일정',
        important: true
      },
      {
        id: 'day1-checkin',
        date: '2026-08-10',
        time: '16:00',
        title: '숙소 체크인',
        placeName: '오사카 숙소 후보',
        address: 'Osaka Station, Osaka, Japan',
        memo: '실제 숙소 확정 후 주소 업데이트',
        linkIds: ['sample-hotel'],
        important: true
      },
      {
        id: 'day1-dotonbori',
        date: '2026-08-10',
        time: '18:30',
        title: '도톤보리 저녁 산책',
        placeName: '도톤보리',
        address: '일본 오사카 도톤보리',
        memo: '저녁/야경 후보',
        linkIds: ['sample-dotonbori']
      }
    ]
  },
  {
    date: '2026-08-11',
    dayLabel: 'Day 2',
    title: '자유 일정',
    items: [
      {
        id: 'day2-placeholder',
        date: '2026-08-11',
        time: '10:00',
        title: '일정 후보 추가 예정',
        memo: '주인님이 장소/링크를 보내주면 이 일정에 연결 가능'
      }
    ]
  }
];
