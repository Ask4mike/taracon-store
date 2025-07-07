import NextTopLoader from "nextjs-toploader";

export default function TopLoader() {
  return (
    <>
      <NextTopLoader
        color="#137283"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={true}
        easing="ease"
        speed={1000}
        shadow="0 0 10px #137283,0 0 5px #61d4c3"
      />
    </>
  );
}
