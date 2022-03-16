import { BsInstagram } from 'react-icons/bs'
import { FiFacebook } from 'react-icons/fi'
import { AiFillGithub } from 'react-icons/ai'
const Main = () => (
  <main className="mx-auto flex max-w-6xl justify-between">
    <div className="">
      <div>
        <h1 className="text-6xl text-white">
          saeed
          <br /> omer
        </h1>
        <div className="mt-2 h-2 w-8 bg-yellow-600"></div>
        <div className="flex gap-4 p-4">
          <a href="http://">
            <BsInstagram className="text-white" />
          </a>
          <a href="http:/">
            <AiFillGithub className="text-white" />
          </a>
          <a href="https://www.facebook.com/saeed.omar.3344913/">
            <FiFacebook className="text-white" />
          </a>
        </div>
      </div>
    </div>

    <div className="">
      <p className="text-gray-300">-introduction</p>
      <h1 className="text-2xl text-white">
        product designer and <br />
        developer, based in
        <br /> aden
      </h1>
      <p className="my-4 text-white">
        sed out perspiciates unde omnis iste natus error sit
        <br /> voluptatem accusantium doloremque landantium,
        <br />
        totam rem aperiam,eaque ispa..
      </p>

      <a href="http://">
        <h1 className="mb-3 text-yellow-600">my story {'->'}</h1>
      </a>
    </div>
  </main>
)
export default Main
