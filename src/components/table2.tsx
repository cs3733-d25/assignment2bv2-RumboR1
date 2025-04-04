import React from 'react';

const Table2: React.FC = () => {
    return (
        <div>
            <h3>Essential Scuba Diving Equipment</h3>
            <table>
                <caption>Equipment needed for scuba diving</caption>
                <thead>
                <tr>
                    <th>Equipment</th>
                    <th>Purpose</th>
                    <th>Approximate Cost</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>BCD (Buoyancy Control Device)</td>
                    <td>Controls buoyancy in water</td>
                    <td>$300-$700</td>
                </tr>
                <tr>
                    <td>Regulator</td>
                    <td>Delivers air from tank</td>
                    <td>$200-$500</td>
                </tr>
                <tr>
                    <td>Wetsuit</td>
                    <td>Thermal protection</td>
                    <td>$150-$400</td>
                </tr>
                <tr>
                    <td>Mask & Snorkel</td>
                    <td>Vision underwater</td>
                    <td>$50-$150</td>
                </tr>
                <tr>
                    <td>Fins</td>
                    <td>Propulsion</td>
                    <td>$60-$200</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table2;