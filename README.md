# Travel Pocket

개인용 여행 링크북입니다.

- GitHub Pages 공개 사이트지만 `robots.txt`와 `noindex`로 검색 노출을 줄입니다.
- URL을 아는 사람은 볼 수 있으므로 민감정보는 저장하지 마세요.
- 실제 페이지: `/t/2026-main-8k3p/`

## 링크 추가

```bash
node scripts/add-travel-link.mjs \
  --title "도톤보리" \
  --category place \
  --memo "저녁에 가기" \
  --address "일본 오사카 도톤보리" \
  --tag "오사카,관광지" \
  --important
```

## 개발

```bash
npm install
npm run build
npm run dev
```
