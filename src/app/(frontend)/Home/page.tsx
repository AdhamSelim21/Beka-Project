import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  return (
    <div>
      <section className="max-w-7xl mx-auto py-24 px-8">
        <div className="mb-16 text-center">
          <h2 className="font-headline font-black text-4xl md:text-5xl text-blue-950 uppercase tracking-tight">
            Sports Playgrounds
          </h2>
          <div className="w-24 h-2 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link
            href="#"
            className="group cursor-pointer bg-white border border-outline rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300"
          >
            <div className="aspect-[16/10] w-full overflow-hidden">
              <img
                alt="Football pitch"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaXDb59ZXUCgTdmZv84Qkn_S5lBtBfGSaOCrFjaPm2ImhRtHuoYjPDNQB1rnTHIR1BG3U2H0CnTarEK8x6xAL7AG9JzfY0-HmzTKXSLiL08J3L2heVsx2zAOXX4s5ZAySA2pn1Z5qhPl8X3xTOuY7tkgalGilu_r8mWvG5mURmsjCtIRTliE6sDbjlpNw05MeeU7T8r-N8Oow-w5laQasMeWXnJNgIf-wF-2rzK3m39Dv8TElyifLHtPvSViM5BKs2bfDBE8LsT-tJ"
              />
            </div>
            <div className="p-8 bg-blue-950">
              <h3 className="font-headline font-black text-2xl text-white uppercase">Acrylic</h3>
            </div>
          </Link>

          <Link
            href="#"
            className="group cursor-pointer bg-white border border-outline rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300"
          >
            <div className="aspect-[16/10] w-full overflow-hidden">
              <img
                alt="Basketball court"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBySwK6d_0bRUNHJR0a8nSq_UD7Wqdhd7ERYvSrtUZGjAPJUo7p203Bi3lVhax7Mc4o_C-LSW3KntQxO4D9vyM4UH5xvO7LC3AmURLSulelJju1r2IAkr8hDTR3cGSXLaskZ8-E-4dW66tYppNO4r_1domJ0BP25Ard2_AakkDEnDyfeBdJiSD8bR5DiTrYs6p9EWtIbf9LkfPUWOoJwt0Sut3rwA64D4Bk9X8XvR6XBW9_ffVtI87C5WVzCtbP35LKJVF0Dw9XqU0X"
              />
            </div>
            <div className="p-8 bg-blue-950">
              <h3 className="font-headline font-black text-2xl text-white uppercase">Tratan</h3>
            </div>
          </Link>

          <Link
            href="#"
            className="group cursor-pointer bg-white border border-outline rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300"
          >
            <div className="aspect-[16/10] w-full overflow-hidden">
              <img
                alt="Tennis court"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJU9MaJnpjjbd1SIi-fx4SWxGjMh-8-znUSg8QfQuZOfl0VcoJJk84kUiO4PlZm4Bx8mjpcRXQNreXXureguqseaDFMQaXnpa9A5fBmKG_DTmu1sdhZnGDrchxkZjPQWS_dyN0cQHJiU6hgTrptFLjIAHfLsoVcUF4XIoR9bMCyuQ3_Vz0ae8HjuTW0jzBppzXZVVNvIMpGC0tujF_x5RMde6QfSOKKHLeF2vqcj46LUIlKObZnyIkYDiYEk_oVZy6Q35pjoM9zT72"
              />
            </div>
            <div className="p-8 bg-blue-950">
              <h3 className="font-headline font-black text-2xl text-white uppercase">
                Artificial-Grass
              </h3>
            </div>
          </Link>

          <Link
            href="#"
            className="group cursor-pointer bg-white border border-outline rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300"
          >
            <div className="aspect-[16/10] w-full overflow-hidden">
              <img
                alt="Swimming pool"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFJh62GMoDTcixhxwaGinPybydjMr2H2rDYz_tL-NCu5ShzBL94RG1lHRlST0rM0wuRcfhJmsCuN72QQ9rMu0IURo-wrqUM4aHi_Cb0BrjDe4IuCwLIiRj7GNIN43LPeWqkwkKMvW27VhbgBdueEJFOovZ0VTZA-DjdMSoQ8Lll65q0vOY2A9U9oriJTAjq4x97CaST-oyiLvr63xzSVWWD-IYGjtqwY9BgdhXw_BxjEOWE6Y6BGRfACglGnnd0s1-JSizYQSXPnwN"
              />
            </div>
            <div className="p-8 bg-blue-950">
              <h3 className="font-headline font-black text-2xl text-white uppercase">padel</h3>
            </div>
          </Link>

          <Link
            href="#"
            className="group cursor-pointer bg-white border border-outline rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300"
          >
            <div className="aspect-[16/10] w-full overflow-hidden">
              <img
                alt="Modern Gym"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFQqdx80oEMMOJuGhAFOy6TS9yKFcmVBMcFF7WT8zZZnW8yFwDlZdrKDgSHzQ5hP-DJ7FjuMHxiKIZW-h-WYLf5VyjwQ1TjDm1H1WYs2W9hqVPP-oiK0bK3w2pn6GtDkSIo_QxXWqIWOtu_9haFQwGXRoCRmlZBsrweCQ_EkAJ6hsHahNXhsQt-6WFqqetxKnO1dXjxTUh1Trh8liwckbFlle3WGS4iuI9blqx2VsAqi6dn4wOmdH_AjBjfeYTDmoN5hLNuxgyHfxe"
              />
            </div>
            <div className="p-8 bg-blue-950">
              <h3 className="font-headline font-black text-2xl text-white uppercase">padpol</h3>
            </div>
          </Link>

          <Link
            href="#"
            className="group cursor-pointer bg-white border border-outline rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300"
          >
            <div className="aspect-[16/10] w-full overflow-hidden">
              <img
                alt="Yoga Studio"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpvKEFL8LX_X5S9-VtGA3-py9TWeximQDnV_UA1nUWf-OFHx_fkNZCk1fUowF9T8AUBYVJocxUhypKU1gSmb29_XbbdG2b_c4MfaQO8sR9u_mAFufJI-NQxNkRTY4KjAzS62wrghg56QxEga1kPW4fIaQVL3a-s2rDYyAxXC4Benz4OLZ801qwQwhjlQtl2MqkqqBGLAPGYnN52jLnQXmwcRowLruILLtQrTV9aUjcE79o_JOqRA0N2lwAElJ5f3MWKAeVvkO6yFFN"
              />
            </div>
            <div className="p-8 bg-blue-950">
              <h3 className="font-headline font-black text-2xl text-white uppercase">Landscape</h3>
            </div>
          </Link>

          <Link
            href="#"
            className="group cursor-pointer bg-white border border-outline rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300"
          >
            <div className="aspect-[16/10] w-full overflow-hidden">
              <img
                alt="Badminton Court"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsG80hgRZqIalQuUkLQAlXe1UFzVnNP27y8JfBA1RRRwgcFE77oZTHNm-bAZl5gxpPy6lO_rA_P4UWspCQSDv20QtgDA0Zfd7IExhOlDbOb1mYUHSYkMQx7gNxHFQkxj1ak91LOPwCLr9EjZO6J-Ufoyn0vSuERgoIEV43D-t0HSVkqw08_-uxAsC-yqRBXZnw__JPpuGKldDJQevJLpo3A6wkUNO_JcxV3lLDu3N92HXISGB28dw8uxE4u0wWLdixCOCXEIhN_ka0"
              />
            </div>
            <div className="p-8 bg-blue-950">
              <h3 className="font-headline font-black text-2xl text-white uppercase">Kids-Area</h3>
            </div>
          </Link>

          <Link
            href="#"
            className="group cursor-pointer bg-white border border-outline rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300"
          >
            <div className="aspect-[16/10] w-full overflow-hidden">
              <img
                alt="Running Track"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3sOCRdxEqWJP3Ih3cPL2ZUF3typEmn12YUPjR0uZ9Ui9EYQ7XMnOMNgPp1Uui5P2qKfGWLSPBPg96LKAaAPd9fA42k6IbmV6BotFyCp7gwc_QJVGNGL3qd81hVJewkFbRMmJHmo_QaK8np4AqdkjSy4tcB-L371Gw-hHoP7mL8Fa1-hU3paqd2-tHBFUoZX8mQmCFquCM_AFIIUGQS-GslE-pyhbcUlkDmt2tXxYMngLS-vCtvsu6SkqhxnMBu7WbNGubaASVfunt"
              />
            </div>
            <div className="p-8 bg-blue-950">
              <h3 className="font-headline font-black text-2xl text-white uppercase">Gym</h3>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}
