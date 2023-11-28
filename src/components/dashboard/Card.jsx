import { motion } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";

export const Card = (props) => {
    const Png = props.png;

    return (
        <motion.div
            className="CompactCard"
            style={{
                backgroundColor: props.color.backGround,
                boxShadow: props.color.boxShadow
            }}
        >
            <div className="radialBar">
                <CircularProgressbar
                    value={props.barValue}
                    text={`${props.barValue}%`}
                />
                <span>{props.title}</span>
            </div>
            <div className="detail">
                <Png />
                <span>{props.value}</span>
            </div>
        </motion.div>
   )
}