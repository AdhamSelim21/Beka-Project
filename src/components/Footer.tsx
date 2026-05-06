import { getPayload } from 'payload'
import config from '@/payload.config'
import { Locale } from '@/types'
import { getDictionary } from '@/messages/Dictionary'
import FooterClient from '@/components/FooterClient'

const getFooterData = async (lang: Locale) => {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  return await payload.find({
    collection: 'footer',
    limit: 0,
    locale: lang,
  })
}

export default async function Footer({ lang }: { lang: Locale }) {
  const [footerData, dict] = await Promise.all([getFooterData(lang), getDictionary(lang)])

  return <FooterClient initialData={footerData} messages={dict.footer} lang={lang} />
}
