import { User } from '@gadget-client/chat-demo';

const Welcome = function ({ firstName }: User) {
  return (
    <div className='prose lg:prose-lg mx-auto'>
      <h1>Welcome, {firstName}!</h1>
      <p>
        Discover the endless possibilities of culinary arts with our exclusive
        guide. Whether you're a seasoned chef or just starting out, there's
        something for everyone.
      </p>

      <h2>Why Cooking Matters</h2>
      <p>
        Cooking at home is more than just a means to feed yourself. It's a
        journey of creativity, health, and saving money while enjoying the
        flavors of the world.
      </p>

      <h3>Top 5 Benefits of Home Cooking</h3>
      <ul>
        <li>Healthier eating habits</li>
        <li>Greater control over your diet</li>
        <li>Enhanced family time</li>
        <li>Money savings</li>
        <li>Expanded culinary skills</li>
      </ul>

      <blockquote>
        "The only real stumbling block is fear of failure. In cooking, you've
        got to have a what-the-hell attitude." - Julia Child
      </blockquote>

      <h4>Quick and Easy Recipes</h4>
      <table>
        <thead>
          <tr>
            <th>Recipe</th>
            <th>Type</th>
            <th>Preparation Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tomato Basil Pasta</td>
            <td>Main Course</td>
            <td>30 mins</td>
          </tr>
          <tr>
            <td>Classic Caesar Salad</td>
            <td>Side</td>
            <td>20 mins</td>
          </tr>
          <tr>
            <td>Chocolate Chip Cookies</td>
            <td>Dessert</td>
            <td>45 mins</td>
          </tr>
        </tbody>
      </table>

      <p>
        Explore more recipes and cooking tips at our{' '}
        <a href='https://example.com'>website</a>.
      </p>
    </div>
  );
};

export default Welcome;
