import React, { useState } from 'react'
import { slideItems } from '../../data'
//styles
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import { Container, Arrow, SlideWrapper, Slide } from './Slider.styles'

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        }

        if (direction === 'right') {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }

    return (
        <Container >
            <Arrow direction='left' onClick={() => handleClick('left')}>
                <ArrowLeftOutlined style={{ fontSize: 50 }} />
            </Arrow>
            <SlideWrapper slideIndex={slideIndex}>
                {slideItems.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                        <div className="imageContainer">
                            <img src={item.image} alt="" />
                        </div>

                        <div className="infoContainer">
                            <div className="title">
                                <h1>{item.title}</h1>
                            </div>
                            <div className="desc">
                                <p>{item.desc}</p>
                            </div>
                            <div className="button">
                                <button>SHOP NOW!</button>
                            </div>
                        </div>
                    </Slide >
                ))}
            </SlideWrapper>
            <Arrow direction='right' onClick={() => handleClick('right')}>
                <ArrowRightOutlined style={{ fontSize: 50 }} />
            </Arrow>
        </Container>
    )
}

export default Slider
