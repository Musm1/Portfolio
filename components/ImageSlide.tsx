import React, { FunctionComponent } from 'react'
import Image from 'next/image';

interface Props {
    image_url: string;
    handleClick?:() => void;
    classImage?:string;
    width:number;
    height: number
  }
  
  const ImageSlide = (props: Props) => {
    return (
      <div>
        <Image
            className={props.classImage}
            src={props.image_url}
            onClick={props.handleClick}
            layout='responsive' 
            quality={100} 
            width={props.width} 
            height={props.height}
        />
      </div>
    );
  };


export default ImageSlide