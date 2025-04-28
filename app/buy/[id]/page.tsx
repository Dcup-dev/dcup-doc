import { PricingDetails } from '@/components/Pricing/Pricing'
import { PaymentProvider } from '@/context/PaymentContext'
import { notFound } from 'next/navigation'

export default async function buy({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const isValidUUIDv4 = (id: string) => {
    const uuidV4Regex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    return uuidV4Regex.test(id)
  }

  if (!isValidUUIDv4(id)) return notFound()

  return (<>
    <div className='pt-14 px-5'>
      <PaymentProvider>
        <PricingDetails />
      </PaymentProvider>
    </div>
  </>
  )
}
