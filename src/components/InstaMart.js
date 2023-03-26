import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'

const Section = ({ title, description, isVisible, setIsVisible }) => {
  // const [isVisible, setIsVisible] = useState(false)

  return (
    <div className='border border-slate-400 rounded-lg p-3 m-2'>
      <div className='flex justify-between items-center py-1 px-2 rounded-md'>
        <h2 className='font-bold text-2xl'>{title}</h2>
        <div>
          {isVisible ? (
            <button
              onClick={() => setIsVisible(false)}
              className='cursor-pointer bg-blue-700 rounded-xl p-[2px] text-white'
            >
              <ChevronUpIcon className='h-6 w-6 text-white' />
            </button>
          ) : (
            <button
              onClick={() => setIsVisible(true)}
              className='cursor-pointer bg-blue-700 rounded-xl p-[2px] text-white'
            >
              <ChevronDownIcon className='h-6 w-6 text-white' />
            </button>
          )}
        </div>
      </div>
      {isVisible && <p className='py-4'>{description}</p>}
    </div>
  )
}

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState('about')
  return (
    <div className='text-center'>
      <h1 className='text-3xl font-bold'>Instamart</h1>
      <Section
        title={'About Instamart'}
        description={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        }
        isVisible={visibleSection === 'about'}
        setIsVisible={() => setVisibleSection('about')}
      />
      <Section
        title={'Team Instamart'}
        description={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        }
        isVisible={visibleSection === 'team'}
        setIsVisible={() => setVisibleSection('team')}
      />
      <Section
        title={'Careers @Instamart'}
        description={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        }
        isVisible={visibleSection === 'careers'}
        setIsVisible={() => setVisibleSection('careers')}
      />
    </div>
  )
}

export default Instamart
