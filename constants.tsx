
import React from 'react';
import { ProdPeriod, ReferenceItem } from './types';

export const DUBBING_REFS: ReferenceItem[] = [
  {
    id: 'dub-1',
    title: '광고주 제공 영상 100%\n(예시: 신선놀음 병맛더빙)',
    description: '광고주 제공 영상 100% 활용.\nB급 감성의 병맛 더빙으로 친근감 선사.',
    period: ProdPeriod.SHORT,
    url: 'https://youtube.com/shorts/eilEcH4tSiQ',
    type: 'video',
    tags: ['제공영상100%', 'B급감성']
  },
  {
    id: 'dub-2',
    title: '제공 영상 50%, 크리에이터 제작 영상 50%\n(예시: 워처 오브 렐름)',
    description: '광고주 제공 영상 부족해도 ok!\n자체 제작 애니메이션으로 광고 영상 제작',
    period: ProdPeriod.MEDIUM,
    url: 'https://youtube.com/shorts/BQ8wtjGHUPA',
    type: 'video',
    tags: ['제공소스부족해도OK', '자체애니메이션추가']
  }
];

export const BLENDING_REFS: ReferenceItem[] = [
  {
    id: '3d-1',
    title: '3D 블렌딩 실사 영상',
    description: '현실 공간에 소환하는 귀여운 캐릭터들.\nai 모델링 기술을 활용해 광고사의 캐릭터들도 소환 가능',
    period: ProdPeriod.LONG,
    url: 'https://www.instagram.com/reel/DG96TqGz-IW/?igsh=MWZ5OXEwdTYwenhxbw==',
    type: 'sns',
    tags: ['Blender', 'RealLife', 'VFX']
  },
  {
    id: 'ch-2',
    title: '틱톡 AR 필터 챌린지',
    description: '터치 한번으로 시청자의 눈 앞에 광고사의 캐릭터를 소환!\n시청자에게 특별한 경험과 임팩트를 선사',
    period: ProdPeriod.LONG,
    url: 'https://www.instagram.com/reel/DHf5O96zLdG/?igsh=YjVuZHhybmZ2ZGRs',
    type: 'sns',
    tags: ['AR필터', '틱톡', '잊지못할경험']
  }
];

export const CHALLENGE_REFS: ReferenceItem[] = [
  {
    id: 'ch-3',
    title: '제공음원을 이용한 챌린지 제작',
    description: '광고주 제공 음원을 활용한 챌린지 제작.\n마찬가지로 사진 1장으로 참여 가능',
    period: ProdPeriod.MEDIUM,
    url: 'https://www.capcut.com/template-detail/7581807956954615058?template_id=7581807956954615058&share_token=0eef3f52-c36f-4e2f-ba57-b714f8bc7fb8&enter_from=template_detail&region=KR&language=ko&platform=copy_link&is_copy_link=1',
    stats: '14,000회 사용',
    type: 'template',
    tags: ['제공음원활용', 'CAPCUT', '바이럴']
  },
  {
    id: 'ch-1',
    title: '한컷챌린지_자동댄스',
    description: '크리에이터 자체 작곡 CM송 + 참여가 매우 쉬운 캡컷 템플릿.\n사진 한장으로 참여 가능!',
    period: ProdPeriod.LONG,
    url: 'https://www.capcut.com/tv2/ZSPvK8MsE/',
    stats: '13,000회 이상 사용',
    type: 'template',
    tags: ['CM송작곡', 'CapCut', '바이럴']
  },
  {
    id: 'ch-4',
    title: '참여형 틱톡 필터 챌린지',
    description: '시청자가 직접 체험하는 고퀄리티 필터 제작.',
    period: ProdPeriod.LONG,
    url: 'https://youtube.com/shorts/tGB1nos2CG4?si=99KhmpY9V4UgaeoH',
    type: 'video',
    tags: ['틱톡', 'CAPCUT', '바이럴'],
    ctaText: '예시 레퍼런스 보기 (섭이스센터 제작 X)'
  }
];
