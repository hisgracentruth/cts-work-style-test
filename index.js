// src/pages/index.js
import Head from "next/head";
import WorkStyleTest from "../components/WorkStyleTest";

export default function Home() {
  return (
    <>
      <Head>
        <title>CTS 업무 성향 테스트</title>
        <meta name="description" content="CTS기독교TV 업무 성향 테스트" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <WorkStyleTest />
      </main>
    </>
  );
}
