import Image from "next/image";

type IconName =
  | "calendar"
  | "chevron"
  | "clipboard"
  | "implant"
  | "phone"
  | "pin"
  | "shield"
  | "sparkle"
  | "tooth";

const services = [
  {
    title: "口腔检查",
    description:
      "全面口腔检查、数字化影像评估，早发现、早预防，守护口腔健康。",
    image: "/images/service-checkup.png",
    icon: "sparkle",
    alt: "牙医为患者进行温和的口腔检查",
  },
  {
    title: "牙齿美白",
    description: "安全温和的美白方案，改善牙齿色泽，绽放自然笑容。",
    image: "/images/service-whitening.png",
    icon: "tooth",
    alt: "患者在现代诊室接受牙齿美白护理",
  },
  {
    title: "隐形矫正",
    description: "个性化隐形矫正方案，舒适美观，高效移动牙齿，重塑笑容。",
    image: "/images/service-aligner.png",
    icon: "tooth",
    alt: "透明隐形牙套产品特写",
  },
  {
    title: "种植修复",
    description: "数字化种植技术，稳固耐用，恢复咀嚼功能，重建健康生活。",
    image: "/images/service-implant.png",
    icon: "implant",
    alt: "牙种植体和牙齿模型特写",
  },
] satisfies {
  title: string;
  description: string;
  image: string;
  icon: IconName;
  alt: string;
}[];

const steps = [
  { title: "预约咨询", text: "选择时间，在线或电话预约咨询。", icon: "calendar" },
  { title: "检查评估", text: "数字化影像辅助评估口腔状况。", icon: "sparkle" },
  { title: "方案制定", text: "医生沟通需求，制定个性化治疗方案。", icon: "clipboard" },
  { title: "治疗实施", text: "舒适化治疗，关注体验与效果。", icon: "tooth" },
  { title: "维护跟踪", text: "定期回访，长期维护口腔健康。", icon: "shield" },
] satisfies { title: string; text: string; icon: IconName }[];

const contactItems = [
  { label: "电话", value: "400-800-2026", icon: "phone" },
  { label: "地址", value: "上海市静安区晨光路 88 号", icon: "pin" },
  { label: "营业时间", value: "周一至周五 09:00-18:00", icon: "calendar" },
] satisfies { label: string; value: string; icon: IconName }[];

function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const shared = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.9,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };

  switch (name) {
    case "calendar":
      return (
        <svg {...shared}>
          <path d="M7 3v3M17 3v3M4.5 9.5h15M6.5 5h11A2.5 2.5 0 0 1 20 7.5v10A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-10A2.5 2.5 0 0 1 6.5 5Z" />
          <path d="M8 13h3M8 16h6" />
        </svg>
      );
    case "chevron":
      return (
        <svg {...shared}>
          <path d="m9 6 6 6-6 6" />
        </svg>
      );
    case "clipboard":
      return (
        <svg {...shared}>
          <path d="M9 5.5A2.5 2.5 0 0 1 11.5 3h1A2.5 2.5 0 0 1 15 5.5V6H9v-.5Z" />
          <path d="M8 5H6.5A2.5 2.5 0 0 0 4 7.5v11A2.5 2.5 0 0 0 6.5 21h11a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 17.5 5H16" />
          <path d="M8 12h8M8 16h5" />
        </svg>
      );
    case "implant":
      return (
        <svg {...shared}>
          <path d="M12 3c2.6 0 4.6 2 4.6 4.5 0 2.1-1.3 3.3-2.4 4.5-.8.9-1.2 1.7-1.2 3.1V21h-2v-5.9c0-1.4-.4-2.2-1.2-3.1-1.1-1.2-2.4-2.4-2.4-4.5C7.4 5 9.4 3 12 3Z" />
          <path d="M10.2 17h3.6M10.2 19h3.6" />
        </svg>
      );
    case "phone":
      return (
        <svg {...shared}>
          <path d="M8.2 4.5 10 8.7 7.8 10c1.1 2.4 2.9 4.2 5.3 5.3l1.3-2.2 4.1 1.8c.5.2.8.8.7 1.3l-.5 2.4c-.1.7-.8 1.2-1.5 1.2C10.1 19.5 4.5 13.9 4.2 6.8c0-.7.5-1.4 1.2-1.5l2.4-.5c.2-.1.3-.1.4-.3Z" />
        </svg>
      );
    case "pin":
      return (
        <svg {...shared}>
          <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
          <circle cx="12" cy="10" r="2.4" />
        </svg>
      );
    case "shield":
      return (
        <svg {...shared}>
          <path d="M12 3.5 19 6v5.3c0 4.3-2.9 7.9-7 9.2-4.1-1.3-7-4.9-7-9.2V6l7-2.5Z" />
          <path d="m8.8 12.1 2.1 2.1 4.4-4.7" />
        </svg>
      );
    case "sparkle":
      return (
        <svg {...shared}>
          <path d="M12 3.8 13.8 9l5.4 1.8-5.4 1.8L12 18l-1.8-5.4-5.4-1.8L10.2 9 12 3.8Z" />
          <path d="m18.5 16 .5 1.5 1.5.5-1.5.5-.5 1.5-.5-1.5-1.5-.5 1.5-.5.5-1.5Z" />
        </svg>
      );
    case "tooth":
      return (
        <svg {...shared}>
          <path d="M12 4.4c1.5-.9 3.1-1 4.5-.2 2.1 1.2 2.7 4.1 1.4 7-.7 1.5-.8 2.9-.8 4.2 0 2.9-1 5.1-2.5 5.1-1 0-1.3-1.3-1.6-3.4-.2-1.4-.4-2.5-1-2.5s-.8 1.1-1 2.5c-.3 2.1-.6 3.4-1.6 3.4-1.5 0-2.5-2.2-2.5-5.1 0-1.3-.1-2.7-.8-4.2-1.3-2.9-.7-5.8 1.4-7 1.4-.8 3-.7 4.5.2Z" />
          <path d="M10 6.3c1.4.6 2.6.6 4 0" />
        </svg>
      );
  }
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-950">
      <header className="sticky top-0 z-50 border-b border-teal-900/10 bg-white/92 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <a href="#home" className="flex items-center gap-3" aria-label="晴禾齿科首页">
            <span className="grid size-11 place-items-center rounded-[8px] border border-teal-700/20 bg-teal-50 text-teal-700">
              <Icon name="tooth" className="size-7" />
            </span>
            <span className="text-xl font-semibold tracking-[0.08em] text-teal-800 sm:text-2xl">
              晴禾齿科
            </span>
          </a>

          <div className="hidden items-center gap-10 text-[15px] font-semibold text-slate-800 md:flex">
            <a className="nav-link active" href="#home">
              首页
            </a>
            <a className="nav-link" href="#services">
              服务
            </a>
            <a className="nav-link" href="#process">
              医生团队
            </a>
          </div>

          <a className="btn-primary header-cta h-11 px-5 text-sm sm:px-7" href="#contact">
            预约咨询
          </a>
        </nav>
      </header>

      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff_0%,#f7fcfd_42%,rgba(255,255,255,0)_68%)]" />
        <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:px-10 lg:py-0">
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-balance text-[2.5rem] font-semibold leading-[1.12] tracking-normal text-slate-950 sm:text-6xl lg:text-7xl">
              <span className="block">让每一次微笑，</span>
              <span className="block text-teal-700">都更安心。</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-9 text-slate-600 sm:text-xl">
              从常规检查到隐形矫正，晴禾齿科以数字化设备、温和沟通和透明方案守护全家口腔健康。
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a className="btn-primary h-14 px-8 text-base" href="#contact">
                <Icon name="calendar" className="size-5" />
                预约咨询
              </a>
              <a className="btn-secondary h-14 px-8 text-base" href="#services">
                查看服务
                <Icon name="chevron" className="size-5" />
              </a>
            </div>
          </div>

          <div className="relative z-0 h-[420px] overflow-hidden rounded-[8px] shadow-[0_28px_80px_rgba(15,118,110,0.16)] sm:h-[560px] lg:-mr-16 lg:h-[660px]">
            <Image
              src="/images/clinic-hero.png"
              alt="晴禾齿科明亮现代的数字化牙科诊室"
              fill
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
        <div className="relative z-10 h-14 rounded-t-[48%] bg-white" />
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">我们的服务</h2>
          <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
            覆盖日常护理到进阶治疗，满足您和家人的不同需求。
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-[0_16px_44px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_56px_rgba(15,118,110,0.16)]"
            >
              <div className="relative h-56">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative px-6 pb-7 pt-11 text-center">
                <div className="absolute left-1/2 top-0 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-teal-600/15 bg-teal-50 text-teal-700 shadow-[0_10px_28px_rgba(15,118,110,0.16)]">
                  <Icon name={service.icon} className="size-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-950">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
        <div className="grid overflow-hidden rounded-[8px] bg-sky-50/90 shadow-[0_18px_60px_rgba(14,116,144,0.10)] lg:grid-cols-[1fr_380px]">
          <div className="px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="section-title">安心就诊 透明流程</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                专业团队与数字化设备，让每一步都清晰可见。
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {steps.map((step, index) => (
                <div key={step.title} className="relative text-center">
                  <div className="mx-auto grid size-14 place-items-center rounded-[8px] bg-white text-teal-700 shadow-[0_10px_24px_rgba(15,118,110,0.12)]">
                    <Icon name={step.icon} className="size-8" />
                  </div>
                  <div className="mx-auto mt-5 flex size-6 items-center justify-center rounded-full bg-teal-700 text-xs font-semibold text-white">
                    {index + 1}
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-slate-950">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[320px] lg:min-h-full">
            <Image
              src="/images/clinic-reception.png"
              alt="晴禾齿科明亮整洁的诊所环境"
              fill
              sizes="(min-width: 1024px) 380px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-20">
        <div>
          <h2 className="section-title text-left">联系我们</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            如有任何问题，欢迎随时与我们联系。
          </p>

          <div className="mt-8 space-y-6">
            {contactItems.map((item) => (
              <div key={item.label} className="flex gap-4">
                <div className="grid size-12 shrink-0 place-items-center rounded-full bg-teal-700 text-white">
                  <Icon name={item.icon} className="size-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">{item.label}</p>
                  <p className="mt-1 text-lg font-semibold text-slate-950">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative mt-10 h-52 overflow-hidden rounded-[8px]">
            <Image
              src="/images/clinic-lounge.png"
              alt="晴禾齿科舒适明亮的候诊区域"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <form className="rounded-[8px] bg-sky-50/80 p-6 shadow-[0_16px_48px_rgba(14,116,144,0.10)] sm:p-10">
          <h2 className="text-3xl font-semibold text-slate-950">预约咨询</h2>
          <p className="mt-3 text-base leading-7 text-slate-600">
            填写以下信息，我们会尽快与您联系。
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <label className="field-label">
              <span>姓名</span>
              <input className="field-control" type="text" name="name" placeholder="请输入姓名" />
            </label>
            <label className="field-label">
              <span>手机号</span>
              <input className="field-control" type="tel" name="phone" placeholder="请输入手机号" />
            </label>
            <label className="field-label sm:col-span-2">
              <span>预约项目</span>
              <select className="field-control" name="service" defaultValue="">
                <option value="" disabled>
                  请选择
                </option>
                {services.map((service) => (
                  <option key={service.title} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </label>
            <label className="field-label sm:col-span-2">
              <span>预约日期</span>
              <input className="field-control" type="date" name="date" />
            </label>
            <label className="field-label sm:col-span-2">
              <span>备注（选填）</span>
              <textarea
                className="field-control min-h-32 resize-y"
                name="message"
                placeholder="请填写您的需求或疑问"
              />
            </label>
          </div>

          <button className="btn-primary mt-6 h-14 w-full text-base" type="submit">
            提交预约
          </button>
        </form>
      </section>

      <footer className="bg-teal-800 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-3 lg:px-10">
          <div>
            <div className="flex items-center gap-3 text-2xl font-semibold tracking-[0.08em]">
              <Icon name="tooth" className="size-8" />
              晴禾齿科
            </div>
            <p className="mt-4 max-w-sm text-sm leading-7 text-teal-50/80">
              以数字化技术和温和沟通，为每位患者提供清晰、舒适、可信赖的口腔护理体验。
            </p>
          </div>
          <div>
            <h2 className="footer-title">快捷导航</h2>
            <div className="mt-4 flex flex-col gap-3 text-sm text-teal-50/80">
              <a href="#home">首页</a>
              <a href="#services">服务项目</a>
              <a href="#contact">预约咨询</a>
            </div>
          </div>
          <div>
            <h2 className="footer-title">联系信息</h2>
            <p className="mt-4 text-sm leading-7 text-teal-50/80">
              400-800-2026
              <br />
              上海市静安区晨光路 88 号
              <br />
              周一至周五 09:00-18:00
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
