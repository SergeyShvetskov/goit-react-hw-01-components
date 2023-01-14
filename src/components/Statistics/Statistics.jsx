export const Statistics = ({ title, stats }) => (
    <section class="statistics">
        { title ? <h2 class="title">{title}</h2>: "" }

        <ul class="stat-list">
            {stats.map(item => (
                <li key={item.id} class="item" >
                    <span class="label" >{item.label}</span>
                    <span class="percentage">{item.percentage}</span>
                </li>))}
  </ul>
</section>
);

