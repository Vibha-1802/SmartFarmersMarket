import svgPaths from "./svg-3myoqj3r29";
import imgImage from "figma:asset/c04100954d1c81175f36130f6496716bfa84a88e.png";
import imgImage1 from "figma:asset/167c525f94dcd6efcc84fe16f2be035f885e5ef2.png";
import imgImageContainer from "figma:asset/d537d631a035d2cc8a5b9792c1090879d6ddeb22.png";
import imgImage2 from "figma:asset/4d1af00259ead006d403944d068aa03e932147d7.png";

function Pagination() {
  return (
    <div className="absolute bottom-[8px] content-stretch flex gap-[4px] items-center justify-center left-1/2 translate-x-[-50%]" data-name="pagination">
      <div className="bg-white h-[4px] rounded-[100px] shrink-0 w-[20px]" />
      <div className="bg-[rgba(0,0,0,0.3)] rounded-[100px] shrink-0 size-[4px]" />
      <div className="bg-[rgba(0,0,0,0.3)] rounded-[100px] shrink-0 size-[4px]" />
      <div className="bg-[rgba(0,0,0,0.3)] rounded-[100px] shrink-0 size-[4px]" />
    </div>
  );
}

function Image() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[6px]">
        <div className="absolute bg-[rgba(0,0,0,0.05)] inset-0 rounded-[6px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[6px] size-full" src={imgImage} />
      </div>
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] left-[16px] right-[16px] text-[16px] text-black text-center top-1/2 translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px]">Farm produce showcasing</p>
      </div>
      <Pagination />
    </div>
  );
}

function ImageContainer() {
  return (
    <div className="h-[120px] relative shrink-0 w-full" data-name="image container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[120px] items-start px-[12px] py-0 relative w-full">
          <Image />
        </div>
      </div>
    </div>
  );
}

function Textfield() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="textfield">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Roboto:Regular',sans-serif] font-normal grow h-[20px] leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(0,0,0,0.5)] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Enter your email
          </p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="relative shrink-0 w-full" data-name="Input">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start justify-center px-[12px] py-0 relative w-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Email
          </p>
          <Textfield />
        </div>
      </div>
    </div>
  );
}

function Textfield1() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="textfield">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Roboto:Regular',sans-serif] font-normal grow h-[20px] leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(0,0,0,0.5)] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Enter your password
          </p>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Input">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start justify-center px-[12px] py-0 relative w-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Password
          </p>
          <Textfield1 />
        </div>
      </div>
    </div>
  );
}

function Seconday() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="seconday">
      <div aria-hidden="true" className="absolute border border-[#2e7d32] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[12px] py-[10px] relative w-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#2e7d32] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Login as Buyer
          </p>
        </div>
      </div>
    </div>
  );
}

function Primary() {
  return (
    <div className="basis-0 bg-[#2e7d32] grow min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="primary">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[12px] py-[10px] relative w-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Login as Farmer
          </p>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-start px-[12px] py-0 relative w-full">
          <Seconday />
          <Primary />
        </div>
      </div>
    </div>
  );
}

function Top() {
  return (
    <div className="bg-white h-[24px] relative shrink-0 w-full" data-name="top">
      <div className="absolute h-[10.227px] right-[8.72px] top-[calc(50%+0.023px)] translate-y-[-50%] w-[33.64px]" data-name="time">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 11">
          <g id="time">
            <path d={svgPaths.p13a21a00} fill="var(--fill-0, black)" fillOpacity="0.7" />
            <path d={svgPaths.pfaefa80} fill="var(--fill-0, black)" fillOpacity="0.7" />
            <path d={svgPaths.p27edf200} fill="var(--fill-0, black)" fillOpacity="0.7" />
            <path d={svgPaths.p1105e700} fill="var(--fill-0, black)" fillOpacity="0.7" />
            <path d={svgPaths.p10f6cf00} fill="var(--fill-0, black)" fillOpacity="0.7" />
          </g>
        </svg>
      </div>
      <div className="absolute h-[14px] right-[51px] top-1/2 translate-y-[-50%] w-[9px]" data-name="battery">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 14">
          <path clipRule="evenodd" d={svgPaths.p11a2ad80} fill="var(--fill-0, black)" fillOpacity="0.7" fillRule="evenodd" id="battery" />
        </svg>
      </div>
      <div className="absolute right-[69px] size-[14px] top-1/2 translate-y-[-50%]" data-name="cellular">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path clipRule="evenodd" d="M0 14H14V0L0 14Z" fill="var(--fill-0, black)" fillOpacity="0.7" fillRule="evenodd" id="cellular" />
        </svg>
      </div>
      <div className="absolute h-[14px] right-[84.98px] top-1/2 translate-y-[-50%] w-[18.045px]" data-name="wifi">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 14">
          <path d={svgPaths.p17036780} fill="var(--fill-0, black)" fillOpacity="0.7" id="wifi" />
        </svg>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="content">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pl-[16px] pr-[8px] py-[12px] relative w-full">
          <p className="basis-0 font-['Roboto:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[20px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
            Welcome to Smart Farmers Market
          </p>
        </div>
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-start relative shadow-[0px_0px_6px_0px_rgba(0,0,0,0.12)] shrink-0 w-full" data-name="Top Bar">
      <Top />
      <Content />
    </div>
  );
}

function IcSearch() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ic-search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ic-search">
          <path clipRule="evenodd" d={svgPaths.p401e00} fill="var(--fill-0, white)" fillRule="evenodd" id="shape" />
        </g>
      </svg>
    </div>
  );
}

function Primary1() {
  return (
    <div className="bg-black box-border content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="primary">
      <IcSearch />
    </div>
  );
}

function Textfield2() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="textfield">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-end pl-[12px] pr-[4px] py-[4px] relative w-full">
          <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-[rgba(0,0,0,0.5)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Search for produce...
          </p>
          <Primary1 />
        </div>
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 w-full" data-name="Search">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center px-[12px] py-0 relative w-full">
          <Textfield2 />
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.5)] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Type to search
          </p>
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[18px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Categories
      </p>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center pb-0 pt-[16px] px-0 relative shrink-0 w-full" data-name="section title">
      <Text />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] relative rounded-[16px] shrink-0 size-[32px]" data-name="frame">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 overflow-ellipsis overflow-hidden size-[32px] text-[20px] text-black text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[32px] overflow-ellipsis overflow-hidden">🥕</p>
      </div>
    </div>
  );
}

function Chip() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="chip">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center p-[12px] relative w-full">
          <Frame />
          <div className="basis-0 flex flex-col font-['Roboto:Medium',sans-serif] font-medium grow h-[32px] justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#ffa726] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="[white-space-collapse:collapse] leading-[16px] overflow-ellipsis overflow-hidden">Vegetables</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] relative rounded-[16px] shrink-0 size-[32px]" data-name="frame">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 overflow-ellipsis overflow-hidden size-[32px] text-[20px] text-black text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[32px] overflow-ellipsis overflow-hidden">🍎</p>
      </div>
    </div>
  );
}

function Chip1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="chip">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center p-[12px] relative w-full">
          <Frame1 />
          <div className="basis-0 flex flex-col font-['Roboto:Medium',sans-serif] font-medium grow h-[32px] justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#ffa726] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="[white-space-collapse:collapse] leading-[16px] overflow-ellipsis overflow-hidden">Fruits</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="row">
      <Chip />
      <Chip1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] relative rounded-[16px] shrink-0 size-[32px]" data-name="frame">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 overflow-ellipsis overflow-hidden size-[32px] text-[20px] text-black text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[32px] overflow-ellipsis overflow-hidden">🌾</p>
      </div>
    </div>
  );
}

function Chip2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="chip">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center p-[12px] relative w-full">
          <Frame2 />
          <div className="basis-0 flex flex-col font-['Roboto:Medium',sans-serif] font-medium grow h-[32px] justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#ffa726] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="[white-space-collapse:collapse] leading-[16px] overflow-ellipsis overflow-hidden">Grains</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] relative rounded-[16px] shrink-0 size-[32px]" data-name="frame">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 overflow-ellipsis overflow-hidden size-[32px] text-[20px] text-black text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[32px] overflow-ellipsis overflow-hidden">🥛</p>
      </div>
    </div>
  );
}

function Chip3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="chip">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center p-[12px] relative w-full">
          <Frame3 />
          <div className="basis-0 flex flex-col font-['Roboto:Medium',sans-serif] font-medium grow h-[32px] justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#ffa726] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="[white-space-collapse:collapse] leading-[16px] overflow-ellipsis overflow-hidden">Dairy</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="row">
      <Chip2 />
      <Chip3 />
    </div>
  );
}

function List() {
  return (
    <div className="relative shrink-0 w-full" data-name="list">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center px-[12px] py-0 relative w-full">
          <SectionTitle />
          <Row />
          <Row1 />
        </div>
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[rgba(0,0,0,0.05)] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgImage1} />
      </div>
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[16px] right-[16px] text-[12px] text-black text-center top-1/2 translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">Fresh Strawberries</p>
      </div>
    </div>
  );
}

function ImageContainer1() {
  return (
    <div className="content-stretch flex h-[150px] items-start overflow-clip relative shrink-0 w-full" data-name="image container">
      <Image1 />
    </div>
  );
}

function TextContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="text content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start p-[8px] relative text-black w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Strawberries
          </p>
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            $5/kg
          </p>
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-[150px]" data-name="card">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] w-[150px]">
        <ImageContainer1 />
        <TextContent />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.1),0px_1px_4px_0px_rgba(12,12,13,0.05)]" />
    </div>
  );
}

function Image2() {
  return (
    <div className="basis-0 bg-[rgba(0,0,0,0.05)] grow h-full min-h-px min-w-px relative shrink-0" data-name="image">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[16px] right-[16px] text-[12px] text-black text-center top-1/2 translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">Organic Apples</p>
      </div>
    </div>
  );
}

function ImageContainer2() {
  return (
    <div className="content-stretch flex h-[150px] items-start overflow-clip relative shrink-0 w-full" data-name="image container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageContainer} />
      <Image2 />
    </div>
  );
}

function TextContent1() {
  return (
    <div className="relative shrink-0 w-full" data-name="text content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start p-[8px] relative text-black w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Apples
          </p>
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            $6/kg
          </p>
        </div>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-[150px]" data-name="card">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] w-[150px]">
        <ImageContainer2 />
        <TextContent1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_4px_-1px_rgba(12,12,13,0.1),0px_4px_4px_-1px_rgba(12,12,13,0.05)]" />
    </div>
  );
}

function Image3() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[rgba(0,0,0,0.05)] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgImage2} />
      </div>
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[16px] right-[16px] text-[12px] text-black text-center top-1/2 translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">Creamy Milk</p>
      </div>
    </div>
  );
}

function ImageContainer3() {
  return (
    <div className="content-stretch flex h-[150px] items-start overflow-clip relative shrink-0 w-full" data-name="image container">
      <Image3 />
    </div>
  );
}

function TextContent2() {
  return (
    <div className="relative shrink-0 w-full" data-name="text content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start p-[8px] relative text-black w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Milk
          </p>
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            $1.50/l
          </p>
        </div>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-[150px]" data-name="card">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] w-[150px]">
        <ImageContainer3 />
        <TextContent2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_4px_-1px_rgba(12,12,13,0.1),0px_4px_4px_-1px_rgba(12,12,13,0.05)]" />
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="row">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function List1() {
  return (
    <div className="relative shrink-0 w-full" data-name="list">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center px-[12px] py-0 relative w-full">
          <Row2 />
        </div>
      </div>
    </div>
  );
}

function Top1() {
  return (
    <div className="bg-white h-[24px] relative shrink-0 w-full" data-name="top">
      <div className="absolute h-[10.227px] right-[8.72px] top-[calc(50%+0.023px)] translate-y-[-50%] w-[33.64px]" data-name="time">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 11">
          <g id="time">
            <path d={svgPaths.p13a21a00} fill="var(--fill-0, black)" fillOpacity="0.7" />
            <path d={svgPaths.pfaefa80} fill="var(--fill-0, black)" fillOpacity="0.7" />
            <path d={svgPaths.p27edf200} fill="var(--fill-0, black)" fillOpacity="0.7" />
            <path d={svgPaths.p1105e700} fill="var(--fill-0, black)" fillOpacity="0.7" />
            <path d={svgPaths.p10f6cf00} fill="var(--fill-0, black)" fillOpacity="0.7" />
          </g>
        </svg>
      </div>
      <div className="absolute h-[14px] right-[51px] top-1/2 translate-y-[-50%] w-[9px]" data-name="battery">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 14">
          <path clipRule="evenodd" d={svgPaths.p11a2ad80} fill="var(--fill-0, black)" fillOpacity="0.7" fillRule="evenodd" id="battery" />
        </svg>
      </div>
      <div className="absolute right-[69px] size-[14px] top-1/2 translate-y-[-50%]" data-name="cellular">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path clipRule="evenodd" d="M0 14H14V0L0 14Z" fill="var(--fill-0, black)" fillOpacity="0.7" fillRule="evenodd" id="cellular" />
        </svg>
      </div>
      <div className="absolute h-[14px] right-[84.98px] top-1/2 translate-y-[-50%] w-[18.045px]" data-name="wifi">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 14">
          <path d={svgPaths.p17036780} fill="var(--fill-0, black)" fillOpacity="0.7" id="wifi" />
        </svg>
      </div>
    </div>
  );
}

function IcLeft() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic-left">
          <path clipRule="evenodd" d={svgPaths.p361b8e00} fill="var(--fill-0, black)" fillOpacity="0.7" fillRule="evenodd" id="shape" />
        </g>
      </svg>
    </div>
  );
}

function Content1() {
  return (
    <div className="relative shrink-0 w-full" data-name="content">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[8px] py-[12px] relative w-full">
          <IcLeft />
          <p className="basis-0 font-['Roboto:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[20px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
            Cart
          </p>
        </div>
      </div>
    </div>
  );
}

function TopBar1() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-start relative shadow-[0px_0px_6px_0px_rgba(0,0,0,0.12)] shrink-0 w-full" data-name="Top Bar">
      <Top1 />
      <Content1 />
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[18px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Selected Products
      </p>
    </div>
  );
}

function SectionTitle1() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center pb-0 pt-[16px] px-0 relative shrink-0 w-full" data-name="section title">
      <Text1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] relative rounded-[16px] shrink-0 size-[32px]" data-name="frame">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 overflow-ellipsis overflow-hidden size-[32px] text-[20px] text-black text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[32px] overflow-ellipsis overflow-hidden">🥕</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal grow items-start min-h-px min-w-px relative shrink-0">
      <p className="leading-[20px] relative shrink-0 text-[#ffa726] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Lettuce
      </p>
      <p className="leading-[16px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.5)] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Quantity: 1
      </p>
    </div>
  );
}

function Item() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full" data-name="item">
      <Frame4 />
      <Frame6 />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-black text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        $3
      </p>
      <div className="absolute bottom-0 h-0 left-0 right-0">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 336 1">
            <path d="M0 0.5H336" id="Vector 200" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] relative rounded-[16px] shrink-0 size-[32px]" data-name="frame">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 overflow-ellipsis overflow-hidden size-[32px] text-[20px] text-black text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[32px] overflow-ellipsis overflow-hidden">🍎</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal grow items-start min-h-px min-w-px relative shrink-0">
      <p className="leading-[20px] relative shrink-0 text-[#ffa726] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Apples
      </p>
      <p className="leading-[16px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.5)] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Quantity: 2
      </p>
    </div>
  );
}

function Item1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full" data-name="item">
      <Frame5 />
      <Frame7 />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-black text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        $12
      </p>
      <div className="absolute bottom-0 h-0 left-0 right-0">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 336 1">
            <path d="M0 0.5H336" id="Vector 200" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="relative shrink-0 w-full" data-name="list">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[12px] py-0 relative w-full">
          <SectionTitle1 />
          <Item />
          <Item1 />
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[18px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Total Price
      </p>
    </div>
  );
}

function SectionTitle2() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center pb-0 pt-[16px] px-0 relative shrink-0 w-full" data-name="section title">
      <Text2 />
    </div>
  );
}

function Metric() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="metric">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start p-[12px] relative text-nowrap w-full">
          <p className="[white-space-collapse:collapse] font-['Roboto:Regular',sans-serif] font-normal leading-[20px] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(0,0,0,0.5)] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Total
          </p>
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[28px] overflow-ellipsis overflow-hidden relative shrink-0 text-[20px] text-black whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            $15
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="row">
      <Metric />
    </div>
  );
}

function List3() {
  return (
    <div className="relative shrink-0 w-full" data-name="list">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center px-[12px] py-0 relative w-full">
          <SectionTitle2 />
          <Row3 />
        </div>
      </div>
    </div>
  );
}

function Primary2() {
  return (
    <div className="bg-[#2e7d32] relative rounded-[8px] shrink-0 w-full" data-name="primary">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[12px] py-[10px] relative w-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Place Order
          </p>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[12px] py-0 relative w-full">
          <Primary2 />
        </div>
      </div>
    </div>
  );
}

function Top2() {
  return (
    <div className="bg-white h-[24px] relative shrink-0 w-full" data-name="top">
      <div className="absolute h-[10.227px] right-[8.72px] top-[calc(50%+0.023px)] translate-y-[-50%] w-[33.64px]" data-name="time">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 11">
          <g id="time">
            <path d={svgPaths.p13a21a00} fill="var(--fill-0, black)" fillOpacity="0.7" />
            <path d={svgPaths.pfaefa80} fill="var(--fill-0, black)" fillOpacity="0.7" />
            <path d={svgPaths.p27edf200} fill="var(--fill-0, black)" fillOpacity="0.7" />
            <path d={svgPaths.p1105e700} fill="var(--fill-0, black)" fillOpacity="0.7" />
            <path d={svgPaths.p10f6cf00} fill="var(--fill-0, black)" fillOpacity="0.7" />
          </g>
        </svg>
      </div>
      <div className="absolute h-[14px] right-[51px] top-1/2 translate-y-[-50%] w-[9px]" data-name="battery">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 14">
          <path clipRule="evenodd" d={svgPaths.p11a2ad80} fill="var(--fill-0, black)" fillOpacity="0.7" fillRule="evenodd" id="battery" />
        </svg>
      </div>
      <div className="absolute right-[69px] size-[14px] top-1/2 translate-y-[-50%]" data-name="cellular">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path clipRule="evenodd" d="M0 14H14V0L0 14Z" fill="var(--fill-0, black)" fillOpacity="0.7" fillRule="evenodd" id="cellular" />
        </svg>
      </div>
      <div className="absolute h-[14px] right-[84.98px] top-1/2 translate-y-[-50%] w-[18.045px]" data-name="wifi">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 14">
          <path d={svgPaths.p17036780} fill="var(--fill-0, black)" fillOpacity="0.7" id="wifi" />
        </svg>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="relative shrink-0 w-full" data-name="content">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pl-[16px] pr-[8px] py-[12px] relative w-full">
          <p className="basis-0 font-['Roboto:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[20px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
            Farmer Dashboard
          </p>
        </div>
      </div>
    </div>
  );
}

function TopBar2() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-start relative shadow-[0px_0px_6px_0px_rgba(0,0,0,0.12)] shrink-0 w-full" data-name="Top Bar">
      <Top2 />
      <Content2 />
    </div>
  );
}

function Seconday1() {
  return (
    <div className="bg-[#2e7d32] relative rounded-[12px] shrink-0 w-full" data-name="seconday">
      <div aria-hidden="true" className="absolute border border-neutral-100 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[12px] py-[10px] relative w-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[16px] text-neutral-100 text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            View Orders
          </p>
        </div>
      </div>
    </div>
  );
}

function Seconday2() {
  return (
    <div className="bg-[#2e7d32] relative rounded-[12px] shrink-0 w-full" data-name="seconday">
      <div aria-hidden="true" className="absolute border border-neutral-100 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[12px] py-[10px] relative w-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[16px] text-neutral-100 text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Earnings Summary
          </p>
        </div>
      </div>
    </div>
  );
}

function Primary3() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="primary" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0.16) 100%), linear-gradient(90deg, rgb(245, 245, 245) 0%, rgb(245, 245, 245) 100%)" }}>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[12px] py-[10px] relative w-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#2e7d32] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Add New Product
          </p>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[12px] py-0 relative w-full">
          <Seconday1 />
          <Seconday2 />
          <Primary3 />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-0 contents left-[4.76%] right-[4.76%] top-[29px]">
      <div className="absolute bg-[rgba(62,22,194,0.87)] bottom-0 left-[4.76%] right-[86.91%] top-[29px]" />
      <div className="absolute bg-[rgba(62,22,194,0.87)] bottom-0 left-[18.45%] right-[73.21%] top-[66px]" />
      <div className="absolute bg-[rgba(62,22,194,0.87)] bottom-0 left-[32.14%] right-[59.52%] top-[96px]" />
      <div className="absolute bg-[rgba(62,22,194,0.87)] bottom-0 left-[45.83%] right-[45.83%] top-[62px]" />
      <div className="absolute bg-[rgba(62,22,194,0.87)] bottom-0 left-[59.52%] right-[32.14%] top-[84px]" />
      <div className="absolute bg-[rgba(62,22,194,0.87)] bottom-0 left-[73.21%] right-[18.45%] top-[43px]" />
      <div className="absolute bg-[rgba(62,22,194,0.87)] bottom-0 left-[86.91%] right-[4.76%] top-[73px]" />
    </div>
  );
}

function Graph() {
  return (
    <div className="h-[160px] relative shrink-0 w-full" data-name="graph">
      <div className="absolute bottom-full left-0 right-0 top-0">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 312 1">
            <path d="M0 0.5H312" id="Vector 2" stroke="var(--stroke-0, black)" strokeDasharray="3 3" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-0 right-0 top-1/4" data-name="Vector 2.1">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 312 1">
            <path d="M0 0.5H312" id="Vector 2" stroke="var(--stroke-0, black)" strokeDasharray="3 3" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-0 right-0 top-1/2" data-name="Vector 2.4">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 312 1">
            <path d="M0 0.5H312" id="Vector 2" stroke="var(--stroke-0, black)" strokeDasharray="3 3" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-0 right-0 top-3/4" data-name="Vector 2.5">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 312 1">
            <path d="M0 0.5H312" id="Vector 2" stroke="var(--stroke-0, black)" strokeDasharray="3 3" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-full" data-name="Vector 2.3">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 312 1">
            <path d="M0 0.5H312" id="Vector 2.3" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
      <Group />
    </div>
  );
}

function Container() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start p-[12px] relative w-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[16px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Earnings Summary
          </p>
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.5)] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Earnings
          </p>
          <Graph />
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.5)] text-right w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Months
          </p>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-[12px] py-0 relative w-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function Top3() {
  return (
    <div className="bg-white h-[24px] relative shrink-0 w-full" data-name="top">
      <div className="absolute h-[10.227px] right-[8.72px] top-[calc(50%+0.023px)] translate-y-[-50%] w-[33.64px]" data-name="time">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 11">
          <g id="time">
            <path d={svgPaths.p13a21a00} fill="var(--fill-0, black)" fillOpacity="0.7" />
            <path d={svgPaths.pfaefa80} fill="var(--fill-0, black)" fillOpacity="0.7" />
            <path d={svgPaths.p27edf200} fill="var(--fill-0, black)" fillOpacity="0.7" />
            <path d={svgPaths.p1105e700} fill="var(--fill-0, black)" fillOpacity="0.7" />
            <path d={svgPaths.p10f6cf00} fill="var(--fill-0, black)" fillOpacity="0.7" />
          </g>
        </svg>
      </div>
      <div className="absolute h-[14px] right-[51px] top-1/2 translate-y-[-50%] w-[9px]" data-name="battery">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 14">
          <path clipRule="evenodd" d={svgPaths.p11a2ad80} fill="var(--fill-0, black)" fillOpacity="0.7" fillRule="evenodd" id="battery" />
        </svg>
      </div>
      <div className="absolute right-[69px] size-[14px] top-1/2 translate-y-[-50%]" data-name="cellular">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path clipRule="evenodd" d="M0 14H14V0L0 14Z" fill="var(--fill-0, black)" fillOpacity="0.7" fillRule="evenodd" id="cellular" />
        </svg>
      </div>
      <div className="absolute h-[14px] right-[84.98px] top-1/2 translate-y-[-50%] w-[18.045px]" data-name="wifi">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 14">
          <path d={svgPaths.p17036780} fill="var(--fill-0, black)" fillOpacity="0.7" id="wifi" />
        </svg>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="relative shrink-0 w-full" data-name="content">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pl-[16px] pr-[8px] py-[12px] relative w-full">
          <p className="basis-0 font-['Roboto:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[20px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
            Order Confirmation
          </p>
        </div>
      </div>
    </div>
  );
}

function TopBar3() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-start relative shadow-[0px_0px_6px_0px_rgba(0,0,0,0.12)] shrink-0 w-full" data-name="Top Bar">
      <Top3 />
      <Content3 />
    </div>
  );
}

function Image4() {
  return (
    <div className="basis-0 bg-[rgba(0,0,0,0.05)] grow h-full min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="image">
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] left-[16px] right-[16px] text-[16px] text-black text-center top-1/2 translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px]">Order Success Checkmark</p>
      </div>
    </div>
  );
}

function ImageContainer4() {
  return (
    <div className="h-[120px] relative shrink-0 w-full" data-name="image container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[120px] items-start px-[12px] py-0 relative w-full">
          <Image4 />
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[18px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Order placed successfully!
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.5)] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Your fresh produce will be delivered soon.
      </p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="icon">
          <path d="M4 1L9 6L4 11" id="Vector 9" stroke="var(--stroke-0, black)" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="box-border content-stretch flex gap-[2px] items-center pl-[8px] pr-[4px] py-[3px] relative rounded-[4px] shrink-0" data-name="button">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Back to Home
      </p>
      <Icon />
    </div>
  );
}

function SectionTitle3() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center pb-0 pt-[16px] px-0 relative shrink-0 w-full" data-name="section title">
      <Text3 />
      <Button3 />
    </div>
  );
}

function List4() {
  return (
    <div className="relative shrink-0 w-full" data-name="list">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center px-[12px] py-0 relative w-full">
          <SectionTitle3 />
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-neutral-100 box-border content-stretch flex flex-col gap-[12px] items-center pb-[12px] pt-0 px-0 relative size-full" data-name="Page">
      <ImageContainer />
      <Input />
      <Input1 />
      <Button />
      <TopBar />
      <Search />
      <List />
      <List1 />
      <TopBar1 />
      <List2 />
      <List3 />
      <Button1 />
      <TopBar2 />
      <Button2 />
      <Container1 />
      <TopBar3 />
      <ImageContainer4 />
      <List4 />
    </div>
  );
}