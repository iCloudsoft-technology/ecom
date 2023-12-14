import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./Silder.css"

const Silder = () => {
    return (
        <>

            <Carousel className='mt-5 mb-5 FontFamilyMontSerret' fade>
                <Carousel.Item className='position-relative'>
                    <img className='CarouselHeight' src={require("../../Img/paypal.png")} alt="" />
                    <Carousel.Caption className='position-absolute' style={{ top: "25%" }} >
                        <h3 className='FirstContent'>First slide label</h3>
                        <p className='SecondContent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure non iste inventore eligendi necessitatibus laboriosam consequatur voluptatum, rerum corrupti nobis totam accusamus blanditiis quidem, commodi amet provident labore sunt. Sapiente!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='position-relative'>
                    <img className='CarouselHeight' src={require("../../Img/dhl.png")} alt="" />
                    <Carousel.Caption className='position-absolute' style={{ top: "25%" }} >
                        <h3 className='FirstContent'>Second slide label</h3>
                        <p className='SecondContent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure non iste inventore eligendi necessitatibus laboriosam consequatur voluptatum, rerum corrupti nobis totam accusamus blanditiis quidem, commodi amet provident labore sunt. Sapiente!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='position-relative'>
                    <img className='CarouselHeight' src={require("../../Img/asset.png")} alt="" />
                    <Carousel.Caption className='position-absolute' style={{ top: "25%" }} >
                        <h3 className='FirstContent'>Third slide label</h3>
                        <p className='SecondContent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure non iste inventore eligendi necessitatibus laboriosam consequatur voluptatum, rerum corrupti nobis totam accusamus blanditiis quidem, commodi amet provident labore sunt. Sapiente!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Carousel className='mt-5 mb-5 FontFamilyMontSerret' fade>
                <Carousel.Item className='position-relative'>
                    <img className='CarouselHeight' src={require("../../Img/paypal.png")} alt="" />
                    <Carousel.Caption className='position-absolute' style={{ top: "25%" }} >
                        <h3 className='FirstContent'>First slide label</h3>
                        <p className='SecondContent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure non iste inventore eligendi necessitatibus laboriosam consequatur voluptatum, rerum corrupti nobis totam accusamus blanditiis quidem, commodi amet provident labore sunt. Sapiente!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='position-relative'>
                    <img className='CarouselHeight' src={require("../../Img/dhl.png")} alt="" />
                    <Carousel.Caption className='position-absolute' style={{ top: "25%" }} >
                        <h3 className='FirstContent'>Second slide label</h3>
                        <p className='SecondContent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure non iste inventore eligendi necessitatibus laboriosam consequatur voluptatum, rerum corrupti nobis totam accusamus blanditiis quidem, commodi amet provident labore sunt. Sapiente!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </>
    )
}

export default Silder