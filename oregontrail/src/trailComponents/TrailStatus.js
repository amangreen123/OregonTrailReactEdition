export const TrailStatus = ({ health, milesTraveled, daysOnTrail, pace }) => (
    <div className="trail-status">
        <h3>Trail Status</h3>
        <div className="status-grid">
            <div>
                <strong>Pace:</strong> {pace || "Select a pace"}
            </div>
            <div>
                <strong>Health:</strong> {health}%
            </div>
            <div>
                <strong>Miles:</strong> {milesTraveled}
            </div>
            <div>
                <strong>Days:</strong> {daysOnTrail}
            </div>
        </div>
    </div>
);
