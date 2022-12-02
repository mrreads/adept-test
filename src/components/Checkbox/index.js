import { useEffect, useState } from "react";

function Checkbox({ callback, customToggle = false, customStatus = false }) {
    const [status, setStatus] = useState(false);

    const toggleStatus = (e) => {
        let value = !status;
        callback(e, value);
        if (!customToggle)
            setStatus(value);
    }

    useEffect(() => {
        if (customToggle)
            setStatus(customStatus);
    }, [customStatus, customToggle]);

    return (<div className={`checkbox ${(status ? 'active' : '')}`} onClick={toggleStatus} />)
}

export default Checkbox;