export type TravelLinkCategory =
  | 'place'
  | 'hotel'
  | 'transport'
  | 'food'
  | 'ticket'
  | 'shopping'
  | 'memo'
  | 'other';

export type TravelLink = {
  id: string;
  title: string;
  category: TravelLinkCategory;
  url?: string;
  memo?: string;
  tags?: string[];
  important?: boolean;
  addedAt: string;
  place?: {
    name?: string;
    address?: string;
    lat?: number;
    lng?: number;
    googleMapsUrl?: string;
  };
};

export const travelLinks: TravelLink[] = [
  {
    id: 'sample-dotonbori',
    title: '도톤보리',
    category: 'place',
    memo: '오사카 저녁 산책/맛집 후보를 모아볼 장소',
    tags: ['오사카', '관광지', '저녁'],
    important: true,
    addedAt: '2026-07-27',
    place: {
      name: '도톤보리',
      address: '일본 오사카 도톤보리'
    }
  },
  {
    id: 'sample-hotel',
    title: '숙소 후보',
    category: 'hotel',
    memo: '체크인 시간, 주소, 예약 링크를 나중에 업데이트',
    tags: ['숙소'],
    important: true,
    addedAt: '2026-07-27',
    place: {
      name: 'Osaka Station',
      address: 'Osaka Station, Osaka, Japan'
    }
  },
  {
    id: 'sample-ticket',
    title: '티켓/예약 링크 샘플',
    category: 'ticket',
    url: 'https://example.com',
    memo: '실제 예약 링크를 보내주면 이 자리에 정리',
    tags: ['예약', '티켓'],
    addedAt: '2026-07-27'
  }
];
