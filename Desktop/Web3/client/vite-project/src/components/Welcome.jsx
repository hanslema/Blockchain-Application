import {AiFillPlayCircle} from 'react-icons/ai';
import {SiEthereum} from 'react-icons/si';
import {BsInfoCircle} from 'react-icons/bs';

import {Loader} from './';

const commonStyles = 'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'

const input = ({ placeholder, name, type, value, handleChange }) => (
    <input 
    placeholder = {placeholder} 
    type = {type}
    step = '0.0001'
    value = {value}
    onChange = {(e) => handleChange(e,name)}
    className='my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorpism' 
    />
);

const Welcome = () => {
    const ConnectWallet = () => {

    }
    const handleSubmit = () => {

    }
    return (
        <div classname='flex w-full justify-center items-center'>
            <div classname='flex mf:flex-row flex-col items-start justify-between md:20 py-12 px-4'>
                <div classname='flex flex-1 justify-start flex-col mf:mr-10'>
                    <h1 classname='text-3xl sm:text-5xl text-white text-gradient py-1'>
                        Send Crypto <br /> across the World
                    </h1>
                    <p classname='text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base'>
                        Explore the crypto world. Buy and sell more cryptocurrencies on Krypto
                    </p>
                    <button 
                    type='button'
                    onClick={ConnectWallet}
                    classname="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
                    ><p classname='text-white text-base font-semibold'>Connect Wallet</p></button>
                    <div classname="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
                        <div classname={'rounded-tl-2xl ${commonStyles}'}>Reliability</div>
                        <div classname={commonStyles}>Security</div>
                        <div classname={'rounded-tr-2xl ${commonStyles}'}>Ethereum</div>
                        <div classname={'rounded-bl-2xl ${commonStyles}'}>Web 3.0</div>
                        <div classname={commonStyles}>Low fees</div>
                        <div classname={'rounded-br-2xl ${commonStyles}'}>Blockchain</div>
                    </div>
                    <div classname='flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10'>
                        <div classname='p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorpism'>
                            <div classname='flex justify-between flex-col w-full h-full'>
                                <div classname='flex justify-between items-start'>
                                    <div classname='w-10 h-10 rounded-full border-2 border-white flex justify-center items-center'>
                                        <SiEthereum fontSize={21} color='#fff'/>
                                    </div>
                                    <BsInfoCircle fontSize={17} color='#fff' />
                                </div>
                                <div>
                                    <p classname='text-white font-light text-sm'>
                                        0xbasbe231.................3r3gwfwf
                                    </p>
                                    <p className='text-white font-semibold text-lg mt-1'>
                                        Ethereum
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorpism'>
                            <input placeholder='Address To' name='addressTo' type='text' handleChange={() => {}} />
                            <input placeholder='Amount (ETH)' name='amount' type='number' handleChange={() => {}} />
                            <input placeholder='Keyword (Gif)' name='keyword' type='text' handleChange={() => {}} />
                            <input placeholder='Enter Message' name='message' type='text' handleChange={() => {}} />

                            <div className='h-[1px] w-full bg-gray-400 my-2'/>
                            {false ?(
                                <Loader />
                            ): (
                                <button 
                                type='button'
                                onClick={handleSubmit}
                                className='text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer'
                                >Send Now</button>                               
                            )};
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Welcome;