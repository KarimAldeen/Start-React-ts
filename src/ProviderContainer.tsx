import QueryProvider from './lib/ReactQueryProvider'
import { BrowserRouter } from 'react-router-dom'
import ReduxT from './lib/ReduxT'
import { Tchildren } from './Layout/app/Types'

type ProviderContainerProps =  {
    children:Tchildren

}
function ProviderContainer({children}:ProviderContainerProps) {
  return (
 <BrowserRouter basename='/'>
        {/* <ReduxT> */}
     <QueryProvider>
        {/* <ToastProvider> */}
             {children}
        {/* </ToastProvider> */}
    </QueryProvider>
    {/* </ReduxT> */}
</BrowserRouter>
    )
}

export default ProviderContainer