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
    title: '난바/도톤보리 숙소',
    category: 'hotel',
    memo: '도톤프라자 하차 후 도보 이동 기준. 실제 객실/예약번호 등 민감정보는 공개하지 않음.',
    tags: ['숙소'],
    important: true,
    addedAt: '2026-07-27',
    place: {
      name: 'Osaka Station',
      address: 'Osaka Station, Osaka, Japan'
    }
  },
  {
    id: 'kix-limousine-dotonplaza',
    title: '간사이공항 → 도톤프라자 리무진버스 실적',
    category: 'transport',
    memo: '10번 승강장, 16:30 탑승 기록. 요금 지출: 대인 1,800엔 × 2명 + 소인 900엔 × 1명 = 총 4,500엔. 사진 시간표 기준 16시대 16:00/16:30 확인.',
    tags: ['리무진버스', '도톤프라자', '지출', '실적'],
    important: true,
    addedAt: '2026-07-29',
    place: {
      name: 'Kansai International Airport Terminal 1 Bus Stop 10',
      address: 'Kansai International Airport Terminal 1 Bus Stop 10'
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
