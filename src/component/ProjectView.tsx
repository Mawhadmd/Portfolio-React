import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';


const ProjectView: React.FC<{project: any}> = ({ project }) => {
    const [hover,sethover] = useState<boolean>()
    const [expanded,setexpanded] = useState<boolean>()
    const [ItemsStyle, setItemStyle] = useState<any>()
    const [ExpandedPictureStyle, setExpandedPictureStyle] = useState<any>()
    const refblock = useRef<any>()
    useEffect(() => {
        if (hover && !expanded) {
            setItemStyle((oldStyle: any) => ({
                ...oldStyle,
                transform: 'translate3d(12px, -12px, -13px)',
                boxShadow: 'var(--project-view-hover-box-shadow)',
                padding: '10px',
            }));
        } else {
            setItemStyle((oldStyle: any) => ({
                ...oldStyle,
                transform: 'none',
                boxShadow: 'none',
                padding: '10px',
            }));
        }
    }, [hover, expanded]);
    

    function HandleReadMore() {
        
        if (expanded){
            setItemStyle({})
            setExpandedPictureStyle({})
        }

        else
        {
        setItemStyle({height: '100vh', width: '50vw', zIndex: 50000, position:'fixed', top: 0, right: 0, background: 'none', boxshadow: 'none', backgroundColor: "#000000db", borderRadius: 0})
        setExpandedPictureStyle({height: '100vh', width: '100vw', zIndex: 50000, position:'fixed', top: 0, left: 0})
    }
    setexpanded(!expanded)
        // setTimeout(() => {
        //     setItemStyle({})
        // }, 1000);
        // refblock.current.style.zIndex = '50'
        // refblock.current.style.position = 'relative'
    }
    return (
            <>
            {expanded && <div className='Expandpicture' style={{background: `url(https://raw.githubusercontent.com/Mawhadmd/${project.name}/master/thumbnail.png)`,  
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat', ...ExpandedPictureStyle
                }}>
                </div>}
            <div
             ref={refblock}
            onMouseLeave={()=>{sethover(false)}} onMouseEnter={()=>{sethover(true)}} className='ProjectView' style={{background: `url(https://raw.githubusercontent.com/Mawhadmd/${project.name}/master/thumbnail.png)`,  
                backgroundPosition: 'center',
                backgroundSize: '100% auto',
                backgroundRepeat: 'no-repeat', ...ItemsStyle
                }}>
           <p className='projectname'>{(project.name)}</p>
           <button onClick={HandleReadMore}>{!expanded? "Expand": "Close"}</button>
           {/* <p>{project.private? 'Is Private: Yes': "Is Private: No"}</p> */}
           <p  className='pjktdesc'>{project.description}</p>
           <a target='_blank' href={project.html_url}><button>See on Github</button></a>
     
        </div>
        </>
    );
};


ProjectView.propTypes = {

};


export default ProjectView;
