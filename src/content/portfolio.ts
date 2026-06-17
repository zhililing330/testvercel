import { caseCatalog } from "./cases";

export const portfolioBrand = {
  name: "Linea Studio",
  tagline: "为服务型行业打造兼具审美与转化的品牌官网",
};

export const portfolioHero = {
  eyebrow: null,
  title: "为服务型行业打造兼具审美与转化的品牌官网",
  body: "从牙医诊所到律师事务所、房产经纪，我们把行业信任感、移动端体验与上线交付整合进同一个定制流程。",
  primaryCta: { label: "查看案例", href: "#cases" },
  secondaryCta: { label: "咨询合作", href: "#contact" },
};

export const sectionIntro = {
  cases: {
    title: "三类服务行业的官网转化样板",
    body: "每个案例都围绕行业信任、咨询转化与移动端浏览节奏来组织信息结构，而不是只做一层视觉包装。",
  },
  capabilities: {
    title: "从策略到上线，覆盖服务型官网真正需要的关键环节",
    body: "我们把内容方向、页面表达、前端体验与交付配合放在同一个项目节奏里，让品牌站既能展示审美，也能承接真实咨询。",
  },
  process: {
    title: "小团队也能保持清晰、稳定、可预期的合作推进",
    body: "每一轮都明确目标、反馈节点与交付物，适合需要快速上线又重视品质的服务品牌。",
  },
} as const;

export const caseStudies = [
  caseCatalog.dental,
  caseCatalog.law,
  caseCatalog.realEstate,
] as const;

export const caseStudyHighlights = {
  "/dental": {
    image: "/images/portfolio/case-dental.jpg",
    alt: "牙科诊所官网案例画面",
    summary: "以安心、洁净与预约转化为核心，重构服务说明、就诊流程与移动端咨询入口。",
  },
  "/law": {
    image: "/images/portfolio/case-law.jpg",
    alt: "律师事务所官网案例画面",
    summary: "突出专业可信的团队表达与服务边界，让访客在短时间内读懂擅长领域并产生咨询意愿。",
  },
  "/real-estate": {
    image: "/images/portfolio/case-real-estate.jpg",
    alt: "房产经纪官网案例画面",
    summary: "把高净值房源展示、区域信任感与线索收集放进更轻盈的浏览路径里，兼顾品牌感与效率。",
  },
} as const;

export const capabilities = [
  {
    title: "行业信息架构",
    body: "梳理用户最关心的服务、流程、资质与常见疑问，让内容顺序更贴近咨询决策。",
  },
  {
    title: "品牌视觉表达",
    body: "通过摄影气质、排版层级与页面节奏建立行业可信度，而不是只堆叠漂亮元素。",
  },
  {
    title: "上线交付支持",
    body: "兼顾移动端体验、基础 SEO 与后续可维护性，确保网站不仅好看，也能稳定上线。",
  },
] as const;

export const processSteps = [
  "沟通需求",
  "确定方向",
  "设计与开发",
  "上线交付",
] as const;

export const processDetails = [
  {
    title: processSteps[0],
    body: "了解行业定位、目标客群与现有素材，明确这次官网最需要解决的业务问题。",
  },
  {
    title: processSteps[1],
    body: "整理页面结构、视觉参考与内容重点，确认站点风格与咨询路径的主框架。",
  },
  {
    title: processSteps[2],
    body: "完成页面设计与前端实现，同步处理移动端适配、图片素材与基础展示细节。",
  },
  {
    title: processSteps[3],
    body: "联调上线环境并完成交付说明，让团队可以顺利接手后续内容更新与运营。",
  },
] as const;

export const contactSection = {
  title: "准备把官网从单页宣传升级成真正的品牌资产？",
  body: "无论你是诊所合伙人、律所负责人还是房产经纪团队，我们都可以先从站点目标、案例方向和上线节奏开始聊起。",
  items: [
    { label: "合作邮箱", value: "hello@lineastudio.cn" },
    { label: "项目周期", value: "通常 2-4 周完成首版" },
    { label: "适合客户", value: "牙科 / 律所 / 房产经纪等服务品牌" },
    { label: "沟通方式", value: "微信、视频会议或面对面梳理" },
  ],
  primaryCta: { label: "发送合作需求", href: "mailto:hello@lineastudio.cn" },
} as const;
