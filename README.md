# Beka-Project

A robust web application built with **Next.js** and **Payload CMS**.

## Overview

Beka-Project is a modern, full-stack application leveraging the power of Next.js for the frontend and Payload CMS for headless content management. It features multi-language support (i18n) and a customizable admin panel.

## Features

- 🌍 **Internationalization (i18n)**: Full multi-language support (English, Arabic, etc.) with RTL layout handling.
- 🚀 **Next.js 15+**: High-performance frontend using the App Router and Server Components.
- 🛠️ **Payload CMS 3.0**: Powerful headless CMS with a custom, type-safe admin panel.
- 💾 **PostgreSQL**: Reliable and scalable database management.
- 🎨 **Premium UI**: Modern, responsive design built with Tailwind CSS and sleek animations.

## Getting Started

### Prerequisites

- Node.js (v18+)
- pnpm (recommended) or npm/yarn
- PostgreSQL (local or cloud)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AdhamSelim21/Beka-Project.git
   cd Beka-Project
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Environment Setup**:
   Create a `.env` file in the root directory and add the necessary environment variables based on `.env.example`. Make sure to set up your `DATABASE_URI` and `PAYLOAD_SECRET`.

### Running locally

Start the development server:

```bash
pnpm dev
```

Open `http://localhost:3000` to view the application.
You can access the Payload admin panel to manage content.

## Available Scripts

- `pnpm dev`: Starts the development server for both Next.js and Payload.
- `pnpm build`: Builds the application for production.
- `pnpm start`: Starts the production server.
- `pnpm generate:types`: Generates TypeScript types based on your Payload collections.
- `pnpm payload generate:importmap`: Regenerates the admin panel import map.
- `pnpm lint`: Runs ESLint to check for code quality issues.

## Project Structure

- `src/app/(frontend)`: Next.js App Router routes for the main website.
- `src/app/(payload)`: Payload CMS admin panel configuration and routes.
- `src/collections`: Definitions for Payload database collections.
- `src/globals`: Definitions for Payload global settings (e.g., Header, Footer).
- `src/components`: Reusable React components for the frontend.
- `src/hooks`: Custom Payload hooks for business logic.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [Payload CMS](https://payloadcms.com/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
