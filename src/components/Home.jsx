import React, { useEffect } from 'react'
import object from '../object/Object.json';
import { Link, useNavigate } from 'react-router-dom';

export const Home = () => {

    const navigate = useNavigate()

    // const sendData = (name) => {
    //     navigate(`/view/${name}`)
    // }
    useEffect(() => {

    }, [])

    return (

        <>
            <div className="container-home">

                <div className="heading-first" data-aos="fade-up">
                    <h1 className='heading'>Transforming Ideas Into Impact & Creating A Powerful Brand Narrative</h1>
                    <p className='heading-para'>If you are in the market for design, development, and marketing services for your business and brands, you’ve come to the right place.</p>
                    <button className='btn-btn-main'>get quote</button>
                </div>
                <div className="heading-first" data-aos="fade-down">
                    <img src="https://www.lth.se/fileadmin/lth/images/Nyhetsbilder_2017/shutterstock_digital_society.jpg" alt="" className='imgData' />
                </div>
            </div>
            <h1 className='heading-our'>Our Services</h1>
            <div className="container-work">
                {
                    object.detailsData.map((item, i) => {
                        return <>
                            <div className="work-list" data-aos="fade-up" key={item.id}>
                                <div className="img-div">
                                    <img src={item.img} alt="img" className='imgcolor' />
                                    <span className='list-heading'>{item.serviceName}</span>
                                    <Link to={`/view/${item.serviceName}`}>View More</Link>
                                </div>
                                <div className="details">
                                    <span className='titles'>{item?.details1}</span>
                                    <span className='titles'>{item?.details2}</span>
                                    <span className='titles'>{item?.details3}</span>
                                    <span className='titles'>{item?.details4}</span>
                                    <span className='titles'>{item?.details5}</span>
                                </div>

                            </div>
                        </>
                    })
                }
            </div>
        </>
    )
}
