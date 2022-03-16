import { BsInstagram } from 'react-icons/bs'
import { FiFacebook } from 'react-icons/fi'
import { AiFillGithub } from 'react-icons/ai'
import Lebel from './Lebel-with_input'
const Footer = () => (
  <div className="bg-gray-900 py-60">
    <div className="flex justify-center">
      <div className="mr-44">
        <h1 className="text-xl text-white">
          Got aproject? <br />
          let's talk
        </h1>
        <p className="mb-11 mt-6 text-gray-400">
          sed ut perspiciates unde omnis iste natus error sit <br />
          voluptatem accusantium.
        </p>
        <a href="http://" className=" text-yellow-600">
          so585372@gmail {'->'}
        </a>
      </div>
      <div>
        <h1 className="text-xl text-white">
          Estimate your project?
          <br />
          let my know here
        </h1>
        <Lebel label="What's your name"></Lebel>
        <Lebel type="email" label="Your fancy email"></Lebel>
        <Lebel label="tell my about your project"></Lebel>
      </div>
    </div>
    <div className="flex justify-center">icons</div>

    <div className=" flex justify-center">
      <div>
        <h1 className=" mt-4 text-white">
          Thanks for scroling,
          <span className="text-gray-400">that's all folks </span>
        </h1>
      </div>
    </div>
    <div className="mt-5 flex justify-center gap-7">
      <a href="http://">
        <BsInstagram className="text-white" />
      </a>
      <a href="http://">
        <FiFacebook className="text-white" />
      </a>
      <a href="http://">
        <AiFillGithub className=" text-white" />
      </a>
    </div>
  </div>
)
export default Footer
