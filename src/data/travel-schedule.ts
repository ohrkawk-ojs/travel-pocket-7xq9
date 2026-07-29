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
    date: '2026-07-29',
    dayLabel: 'Day 1',
    title: '출발 · 간사이공항 · 난바 이동',
    items: [
      {
        id: 'day1-home-departure-record',
        date: '2026-07-29',
        time: '09:00',
        title: '실적 기록: 집 출발',
        placeName: '인천국제공항 제2여객터미널',
        address: '인천국제공항 제2여객터미널',
        memo: '인천공항 T2 도착 예상 10:15. 도착 20분 전인 09:55 전후 발렛 연락 필요.',
        important: true
      },
      {
        id: 'day1-valet-call-reminder',
        date: '2026-07-29',
        time: '09:55',
        title: '발렛 도착 20분 전 연락',
        placeName: '인천공항 T2 단기주차장',
        address: '인천공항 제2여객터미널 단기주차장 지상 2층 동편 243번 구역',
        memo: '연락처는 공개 페이지에 전체 노출하지 않음. 예약 시간 10:00, 실제 도착 예상 10:15 기준.',
        important: true
      },
      {
        id: 'day1-kix-arrival',
        date: '2026-07-29',
        time: '15:15',
        title: '간사이공항 도착',
        placeName: '간사이국제공항',
        address: 'Kansai International Airport, Osaka, Japan',
        memo: '입국 수속 후 T1 1층 B출입구 방향 10번 승강장으로 이동.',
        important: true
      },
      {
        id: 'day1-limousine-bus-record',
        date: '2026-07-29',
        time: '16:30',
        title: '실적 기록: 도톤프라자행 리무진버스 탑승',
        placeName: '간사이공항 리무진버스 10번 승강장',
        address: 'Kansai International Airport Terminal 1 Bus Stop 10',
        memo: '도톤프라자/난바 방면. 사진 시간표 기준 16:30 탑승 기록. 지출: 대인 1,800엔 × 2명 + 소인 900엔 × 1명 = 총 4,500엔.',
        linkIds: ['kix-limousine-dotonplaza'],
        important: true
      },
      {
        id: 'day1-doton-plaza-arrival',
        date: '2026-07-29',
        time: '17:20 예상',
        title: '도톤프라자 도착 후 숙소 이동',
        placeName: '도톤프라자',
        address: 'Doton Plaza Osaka, Osaka, Japan',
        memo: '하차 후 난바/도톤보리 숙소까지 도보 이동.',
        linkIds: ['sample-dotonbori']
      },
      {
        id: 'day1-dinner-candidate-note',
        date: '2026-07-29',
        time: '저녁',
        title: '도톤보리·난바역 근처 저녁 후보 검토',
        placeName: '도톤보리',
        address: '일본 오사카 도톤보리',
        memo: '오늘 컨디션 보고 결정. 새 맛집 후보는 아직 사이트에 확정 기록하지 않음.',
        linkIds: ['sample-dotonbori']
      }
    ]
  },
  {
    date: '2026-07-30',
    dayLabel: 'Day 2',
    title: '자유 일정',
    items: [
      {
        id: 'day2-placeholder',
        date: '2026-07-30',
        time: '10:00',
        title: '일정 후보 추가 예정',
        memo: '주인님이 장소/링크를 보내주면 이 일정에 연결 가능'
      }
    ]
  }
];
