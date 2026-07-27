export const categories = [
  { id: 'all', label: '전체' },
  { id: 'important', label: '중요' },
  { id: 'place', label: '지도/장소' },
  { id: 'hotel', label: '숙소' },
  { id: 'transport', label: '교통' },
  { id: 'food', label: '맛집' },
  { id: 'ticket', label: '티켓' },
  { id: 'shopping', label: '쇼핑' },
  { id: 'memo', label: '메모' },
  { id: 'other', label: '기타' },
] as const;

export type CategoryId = typeof categories[number]['id'];

export function categoryLabel(category: string) {
  return categories.find((item) => item.id === category)?.label ?? category;
}
