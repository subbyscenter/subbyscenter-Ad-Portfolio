
// Add React import to resolve namespace issues for ReactNode
import React from 'react';

export enum ProdPeriod {
  SHORT = '2~3일',
  MEDIUM = '3~5일',
  LONG = '5~7일'
}

export interface ReferenceItem {
  id: string;
  title: string;
  description: string;
  period: ProdPeriod;
  url: string;
  type: 'video' | 'sns' | 'template';
  stats?: string;
  tags: string[];
  ctaText?: string;
}

export interface SlideData {
  id: number;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  bgClass: string;
}
