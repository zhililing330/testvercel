import { caseCatalog } from "./cases";

export const portfolioBrand = {
  name: "Linea Studio",
  tagline: "为服务型行业打造兼具审美与转化的品牌官网",
};

export const caseStudies = [
  caseCatalog.dental,
  caseCatalog.law,
  caseCatalog.realEstate,
] as const;

export const processSteps = [
  "沟通需求",
  "确定方向",
  "设计与开发",
  "上线交付",
] as const;
