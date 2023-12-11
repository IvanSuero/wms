import { ActionsData } from '../../Data/ActionsData'

export const ActionCards = () => {
    return (
        <div className="cards">
            {
                ActionsData.map((action) => {
                    return (
                        <div className="card" key={action.id}>
                            <div className='cardIcon'>
                                <action.icon />
                            </div>
                            <div className="cardText">
                                <h2>{action.text}</h2>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}