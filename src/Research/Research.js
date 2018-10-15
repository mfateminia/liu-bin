import React from 'react';
import ResearchAreas from '../API/ResearchAreas.json';
import './Research.css';

const ResearchBuilder = (items) => {
    return (
        items.map((item,index)=>{
            return (
                <div className = '-research-outer-wrapper container' key = {index}>
                    <p className = '-research-header'>
                        {item.header}
                    </p>
                    <div className = '-research-body'>
                        <div className = '-research-body-content'>
                          {item.content}
                        </div> 
                        <div className = '-research-refs'>
                            <p className = '-research-refs-header'>
                                Explore some of our papers in this area
                            </p>

                            <div className = '-research-refs-item'>                                
                                <p className = '-research-refs-title'>
                                    {item.ref.title}
                                </p> 
                                <p className = '-research-refs-authors'>
                                    {item.ref.authors}
                                </p>
                                <p className = '-research-refs-address'>
                                    <span className = '-research-refs-journal'>{item.ref.journal}</span>, 
                                    <span className = '-research-refs-year'>{item.ref.year}</span>, 
                                    <span className = '-research-refs-volume'>{item.ref.volume}</span>, 
                                    <span className = '-research-refs-page'>{item.ref.page}</span>
                                </p>                                                                 
                            </div>                
                        </div>                           
                    </div>
                </div>
            );
        })
    );
}

const Research = () =>{
    return ResearchBuilder(ResearchAreas);
}

export default Research;