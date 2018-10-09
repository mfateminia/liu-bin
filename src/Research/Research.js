import React from 'react';
import './Research.css';

const researchFields = [
    {
        header: 'Synthesis of aggregation induced emission fluorogens',
        content: 'Unlike conventional fluorophores which usually exhibit quenched emission at high concentration or in aggregate state, fluorogens with aggregation-induced emission (AIE) characteristics show exactly the opposite phenomenon. Typical AIE fluorogens are characterized by their propeller-shaped rotorlike structures, which undergo low-frequency torsional motions as isolated molecules and emit very weakly in solutions. Our research focuses on two approaches to utilize AIE effect in the development of fluorescent bioprobes. On the one hand, these fluorogens can be engineered',
        image: '',
        ref: {
            title: 'A Light-Up Probe with Aggregation-Induced Emission for Real-Time Bio-orthogonal Tumor Labelling and Image-Guided Photodynamic Therapy',
            authors: 'Guangxue Feng et al',
            journal: 'Acc. Chem. Res.',
            year: '2018',
            volume: '51',
            page: '1404',
            link: ''
        }
    },
    {
        header: 'Synthesis of aggregation induced emission fluorogens',
        content: 'Unlike conventional fluorophores which usually exhibit quenched emission at high concentration or in aggregate state, fluorogens with aggregation-induced emission (AIE) characteristics show exactly the opposite phenomenon. Typical AIE fluorogens are characterized by their propeller-shaped rotorlike structures, which undergo low-frequency torsional motions as isolated molecules and emit very weakly in solutions. Our research focuses on two approaches to utilize AIE effect in the development of fluorescent bioprobes. On the one hand, these fluorogens can be engineered',
        image: '',
        ref: {
            title: 'A Light-Up Probe with Aggregation-Induced Emission for Real-Time Bio-orthogonal Tumor Labelling and Image-Guided Photodynamic Therapy',
            authors: 'Guangxue Feng et al',
            journal: 'Acc. Chem. Res.',
            year: '2018',
            volume: '51',
            page: '1404',
            link: ''
        }
    }
];

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
    return ResearchBuilder(researchFields);
}

export default Research;