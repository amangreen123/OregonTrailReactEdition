export const PlayerInfo = ({ leader, party, profession, money, startMonth, status }) => (
    <div className="player-info">
        <h2>Oregon Trail</h2>
        <div className="info-grid">
            <div>
                <strong>Leader:</strong> {leader || 'Not set'}
            </div>
            <div>
                <strong>Party:</strong> {party?.join(", ") || 'Not set'}
            </div>
            <div>
                <strong>Profession:</strong> {profession || 'Not set'}
            </div>
            <div>
                <strong>Money:</strong> ${money || 0}
            </div>
            <div>
                <strong>Start Month:</strong> {startMonth || 'Not set'}
            </div>
            <div>
                <strong>Status:</strong> {Array.isArray(status) ? status.join(', ') : (status || 'Not set')}
            </div>
        </div>
    </div>
);
