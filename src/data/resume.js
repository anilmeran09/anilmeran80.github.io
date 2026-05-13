export const personal = {
  name: 'Anil Meran',
  title: 'Software Engineer',
  subtitle: 'Backend · Data · ML Engineer',
  email: 'anilmeran80@gmail.com',
  phone: '+91-7440506737',
  location: 'Bangalore, India',
  github: 'https://github.com/anilmeran09',
  linkedin: 'https://www.linkedin.com/in/anilmeran/',
  summary:
    'Versatile Backend, Data & ML Engineer with 2.5+ years of experience building scalable APIs, real-time systems, and AI-driven applications. Proven expertise in designing production-grade FastAPI backends with async architecture, WebSocket streaming, LLM integration (Azure OpenAI, LangChain, Gemini), and multi-tenant SaaS platforms. Also experienced in ETL pipelines, cloud engineering (AWS/Azure), dashboard development, and automation. Comfortable working across the full stack — Python, React, Docker, Redis, PostgreSQL — and shipping in CI/CD environments.',
}

export const experiences = [
  {
    company: 'Aiqwip',
    role: 'Software Engineer',
    period: '09/2025 – Present',
    location: 'Bangalore, India',
    highlights: [
      'Architected and built the entire backend from scratch using FastAPI, async SQLAlchemy 2.0, and PostgreSQL with multi-tenant, role-based access control (Super Admin / Manager / User).',
      'Designed a WebSocket-based real-time AI conversation engine with token-by-token LLM streaming (LangChain + Azure OpenAI GPT-4.1), idle detection, graceful disconnect handling, and Google Gemini as fallback.',
      'Built an automated LLM evaluation pipeline that scores transcripts against custom assessment criteria (0–100), generating insights, narrative summaries, and PDF reports uploaded to Azure Blob Storage.',
      'Implemented a 5-table session audit schema with Redis queue-based async event logging, batch inserts, retry logic, and backlog monitoring for full session observability.',
      'Integrated ANAM.ai SDK for WebRTC-based video/voice avatar sessions running in parallel with AI conversations.',
      'Built role-specific account data export (PDF via email), public shareable roleplay links, and a prompt management system with block composition, variable substitution, and live WebSocket test interface.',
      'Implemented Redis-based rate limiting middleware with per-organization usage controls and APScheduler cron jobs for subscription management, session cleanup, and avatar session lifecycle.',
      'Managed Alembic migrations, multi-environment deployments (Dev / UAT / Prod) via GitHub Actions CI/CD, integrated Azure Communication Services for email delivery, and set up Sentry for error monitoring.',
    ],
    project: {
      name: 'Imeld.ai – AI-Powered Roleplay Training Platform',
      stack: 'Python 3.12, FastAPI, PostgreSQL, SQLAlchemy 2.0 (Async), Redis, LangChain, Azure OpenAI (GPT-4.1), Google Gemini, WebSockets, asyncio, APScheduler, Azure Blob Storage, Azure Communication Services, Docker, GitHub Actions, Sentry',
      description:
        'A multi-tenant SaaS platform that enables organizations to train employees on soft skills through real-time AI-powered conversations with video/voice avatars. Features LLM streaming, automated transcript evaluation, PDF report generation, and role-based access control for managers and teams.',
    },
  },
  {
    company: 'Polynomial AI',
    role: 'Machine Learning Engineer',
    period: '01/2025 – 09/2025',
    location: 'Bangalore, India',
    highlights: [
      'Built end-to-end data-driven applications and dashboards using Python, Flask, Django, and Streamlit.',
      'Developed personalized email campaign tools with dynamic templates and document attachments using Celery and Redis.',
      'Used LLMs (ChatGPT) to generate summaries for SEC filings and market reports.',
      'Created interactive dashboards showing trends, revenue, and performance metrics using PostgreSQL and MongoDB.',
      'Managed background tasks and data pipelines for smooth and scalable processing.',
      'Handled both frontend (React, Streamlit) and backend development for seamless integration.',
      'Deployed workflows using Jenkins CI/CD tools and Caddy as reverse proxy.',
    ],
    projects: [
      {
        name: 'SEC Filings Notification System',
        stack: 'Python, Flask, MongoDB, Celery, OpenAI (ChatGPT)',
        description:
          'Subscription-based web app delivering summarized SEC filings via email, with ChatGPT for intelligent summaries and Celery for background PDF parsing and dispatch.',
      },
      {
        name: 'Dynamic Email Campaign System',
        stack: 'Django, React, PostgreSQL, Celery, Redis',
        description:
          'Full-stack app to automate personalized bulk email campaigns with Excel uploads, dynamic {{ }} templating, per-recipient document attachments, and Celery/Redis queue handling.',
      },
      {
        name: 'Industry Insights Dashboard Generator',
        stack: 'Python, PostgreSQL, OpenAI (LLM), Streamlit',
        description:
          'Dashboard app generating industry-specific insights using NACE codes and Yahoo Finance data — market size, growth, financial trends, key drivers, and entry barriers.',
      },
      {
        name: 'Restaurant POS Data Scraping & Analytics',
        stack: 'Python, Selenium, MongoDB, Flask, BullMQ',
        description:
          'System to scrape restaurant POS platforms and generate interactive dashboards tracking top-selling products, labor management, and performance metrics with Selenium and BullMQ.',
      },
    ],
  },
  {
    company: 'Zecdata Technology',
    role: 'Data Engineer',
    period: '07/2023 – 06/2024',
    location: 'Indore, India',
    highlights: [
      'Designed, developed, and optimized robust data pipelines leveraging AWS services: Lambda, S3, ECS, ECR, and SNS.',
      'Developed and maintained ETL processes integrating data from 5 disparate sources, creating a centralized repository for 15+ data analysts.',
      'Launched a centralized data modeling initiative that enhanced visibility of data movement across systems.',
      'Built a Django web application with secure REST APIs for user sign-up and sign-in.',
    ],
    project: {
      name: 'Velocity Media',
      stack: 'Python, Apify, SQL, PySpark, AWS Lambda, AWS S3, ETL',
      description:
        'Automated data extraction and integration platform gathering comprehensive place information from Google Maps and Facebook via Apify, centralizing it into a structured database.',
    },
  },
]

export const skills = {
  'Languages & Core': ['Python', 'OOP', 'Pandas', 'NumPy', 'JavaScript', 'TypeScript'],
  'Frameworks & APIs': ['FastAPI', 'Django', 'Flask', 'REST API', 'WebSockets', 'asyncio'],
  'Databases': ['PostgreSQL', 'MongoDB', 'Oracle', 'Redis', 'SQLAlchemy 2.0'],
  'AI / ML / GenAI': ['LangChain', 'Azure OpenAI', 'Google Gemini', 'RAG Pipeline', 'Agentic AI', 'Hugging Face', 'Mistral', 'MCP Server'],
  'Cloud & DevOps': ['AWS S3', 'AWS Lambda', 'EC2', 'Azure Blob Storage', 'Docker', 'GitHub Actions', 'Jenkins CI/CD', 'Caddy'],
  'Background & Queues': ['Celery', 'Redis', 'BullMQ', 'APScheduler'],
  'Frontend': ['React', 'Streamlit'],
  'Other Tools': ['ETL', 'PySpark', 'Alembic', 'Sentry', 'Git', 'Selenium'],
}

export const education = [
  {
    institution: 'Chameli Devi Group of Institutions, Indore, MP',
    degree: 'B.Tech – Computer Science and Engineering',
    year: '2023',
    score: '7.89 CGPA',
  },
  {
    institution: 'School for Excellence No. 1, Khargone, MP',
    degree: '12th – Mathematics',
    year: '2019',
    score: '70%',
  },
  {
    institution: 'School for Excellence No. 1, Khargone, MP',
    degree: '10th',
    year: '2017',
    score: '71%',
  },
]
