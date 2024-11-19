import React, { useEffect, useRef, useState } from 'react';
import uparr from '../assets/up-arrow.png'

const ProjectView: React.FC<{project: any}> = ({ project }) => {
    const [hover,sethover] = useState<boolean>()
    const [ItemsStyle, setItemStyle] = useState<any>()
 
    const refblock = useRef<any>()
    useEffect(() => {
        if (hover) {
            setItemStyle((oldStyle: any) => ({
                ...oldStyle,
                transform: 'translate3d(12px, -12px, -13px)',
                boxShadow: '-5px -5px 10px rgba(0, 0, 0, 0.7)',
                padding: '10px',
            }));
        } else {
            setItemStyle((oldStyle: any) => ({ //not hovering
                ...oldStyle,
                transform: 'none',
                boxShadow: '-1px -1px 5px rgba(0, 0, 0, 0.9)',
                padding: '10px',
            }));
        }
    }, [hover]);
    

    return (
            <>
            <div
             ref={refblock}
            onMouseLeave={()=>{sethover(false)}} onMouseEnter={()=>{sethover(true)}} className='ProjectView' style={{background: `url(https://raw.githubusercontent.com/Mawhadmd/${project.name}/master/thumbnail.png)`,  
                backgroundPosition: 'center',
                backgroundSize: '100% auto',
                backgroundRepeat: 'no-repeat', ...ItemsStyle
                }}>
           <h3 className='projectname'>{(project.name)}</h3>
           <p  className='pjktdesc'>{project.description}</p>
           <a target='_blank' href={project.html_url}><button><img src={uparr} alt="Arrow" />Github</button></a>
     
        </div>
        </>
    );
};


ProjectView.propTypes = {

};


export default ProjectView;
