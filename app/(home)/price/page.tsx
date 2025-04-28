import { PricingDetails } from '@/components/Pricing/Pricing'
import { PaymentProvider } from '@/context/PaymentContext'

export default async function pricing() {
  return (<>
    <div className='pt-14 px-5'>
      <PaymentProvider>
        <PricingDetails />
      </PaymentProvider>
    </div>
  </>
  )
}
