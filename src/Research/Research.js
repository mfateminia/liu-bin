import React from 'react';
import ResearchAreas from '../API/ResearchAreas.json';
import './Research.css';

const researchBuilder = () => {
    return (
        ResearchAreas.map((item,index)=>{
            return (
                <div className = '-research-outer-wrapper container' key = {index}>
                    <p className = '-research-header'>
                        {item.header}
                    </p>
                    <div className = '-research-body row'>
                        <div className = 'col-lg-5 text-center'>
                            <img className = 'img-fluid' src={process.env.PUBLIC_URL + '/img/research/' + item.image} alt='not found!' />
                        </div>
                        <div className = '-research-body-content col-lg-7'>
                          {item.content}
                        </div> 
                        <div className = '-research-refs'>
                            <p className = '-research-refs-header'>
                                Explore some of our papers in this area
                            </p>

                            <div>
                                {refBuilder(item.ref)}
                            </div>               
                        </div>                           
                    </div>
                </div>
            );
        })
    );
}

const refBuilder = (refs) => {
    return refs.map((ref, index) => {
        return (
            <div className = '-research-refs-item'>                                
                <p className = '-research-refs-title'>
                    {'['+(index+1)+'] '+ref.title}
                </p> 
                <p className = '-research-refs-authors'>
                    {ref.authors}
                </p>
                <p className = '-research-refs-address'>
                    <span className = '-research-refs-journal'>{ref.journal}</span>, 
                    <span className = '-research-refs-year'>{ref.year}</span>, 
                    <span className = '-research-refs-volume'>{ref.volume}</span>, 
                    <span className = '-research-refs-page'>{ref.page}</span>
                </p>                                                                 
            </div> 
        )
    });
}

const Research = () =>{
    return researchBuilder();
}

export default Research;