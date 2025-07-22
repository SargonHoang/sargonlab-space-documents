import React from 'react';
import { usePageData } from '@rspress/runtime';
import { FaCode, FaCogs, FaCloud } from 'react-icons/fa';

export default function CustomHomePage() {
  const { siteData } = usePageData();

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-100 py-16 px-6 text-gray-800">
      <section className="text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">
          {siteData.title}
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
          Tài liệu nội bộ cho các module phát triển: Frontend, Backend, DevOps
          và hơn thế nữa.
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href="/developments/frontend"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Vào Frontend
          </a>
          <a
            href="/developments/backend"
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Vào Backend
          </a>
          <a
            href="/developments/devops"
            className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
          >
            Vào DevOps
          </a>
        </div>
      </section>

      <section className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <FeatureCard
          icon={<FaCode className="text-blue-600 text-4xl" />}
          title="Frontend hiện đại"
          description="Tài liệu về React, Vue, Tailwind, Astro,..."
        />
        <FeatureCard
          icon={<FaCogs className="text-green-600 text-4xl" />}
          title="Backend mạnh mẽ"
          description="NestJS, C#, Spring Boot, Golang,..."
        />
        <FeatureCard
          icon={<FaCloud className="text-yellow-500 text-4xl" />}
          title="Hạ tầng DevOps"
          description="Docker, Kubernetes, CI/CD, GitOps,..."
        />
      </section>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
      <div className="flex items-center justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-center mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
}
