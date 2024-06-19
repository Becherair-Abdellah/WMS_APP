// pages/login.js
import Head from 'next/head';
import Button from '@/components/Button';
export default function Login() {
  return (
    <>
      <Head>
        <title>Login - PineMin</title>
      </Head>
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* div1 */}
        <div className="w-full md:w-1/2 py-8 md:p-12 flex flex-col justify-center ">
          <div className='m-auto w-[80%]'>
            <h1 className="text-4xl font-bold mb-4 tracking-[-1px]">Login to your Account!</h1>
            <div className="flex space-x-4 mb-4">
                

                <Button text='Login With Facebook' color="text-white" bg="bg-primary-primary__c "/>
                

                
                <Button text='Login With Google' color="text-primary-primary__c" bg="bg-white"/>
                
            
              
            </div>
            <div className="my-4 text-center text-gray-500">- OR -</div>
            <form className="space-y-4">
              <div>
                <label className="block mb-1">Email Address</label>
                <input
                  type="email"
                  className="w-full p-2  border-b-2 outline-none font-bold text-xl  focus:border-primary-primary__black"
                  placeholder="name@gmail.com"
                />
              </div>
              <div>
                <label className="block mb-1">Password</label>
                <input
                  type="password"
                  className="w-full p-2  border-b-2 outline-none font-bold text-xl  focus:border-primary-primary__black"
                  placeholder="●●●●●●●●●●"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className='check'>
                  <input  type="checkbox" className="mr-2 accent-primary-primary__c cursor-pointer" />
                  <label>Remember Me</label>
                </div>
                <a href="#" className="text-sm text-primary-primary__c">Forgot Password</a>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-primary-primary__c text-white rounded"
              >
                Login To Your Account
              </button>
            </form>
            <div className="mt-4 text-center">
              <a href="#" className="text-sm text-primary-primary__c">Don't have an account? Signup</a>
            </div>
          </div>
        </div>
        {/* div2 */}
        <div className="w-full md:w-1/2 bg-white p-8 md:p-12 flex flex-col justify-center relative">
          <div className="space-y-8">
            
            
           
            
          </div>
        </div>




      </div>
    </>
  );
}
