import { Suspense } from "react";
import DelayComponent from "./DelayComponent";

export default function DashboardPage() {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  return <div className="border border-blue-500 rounded-lg p-5 m-2">Dashboard Page</div>
  // return (
  //   <div>
  //     Heyyy from dashboard
  //     <Suspense fallback={<p>Delay loading...</p>}>
  //       <DelayComponent />
  //     </Suspense>
  //     {'abcdefghi'.split('').map((item) => (
  //       <p key={item}>
  //         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi a
  //         tenetur, recusandae vitae magnam labore perspiciatis inventore,
  //         voluptatibus, ut voluptatum accusantium. Ullam tenetur dolorum placeat
  //         reiciendis dolores? Non fuga voluptates, unde iste deleniti laboriosam
  //         saepe hic tempore nisi impedit tenetur placeat nihil ea rem maxime,
  //         incidunt sit obcaecati quo asperiores.
  //       </p>
  //     ))}
  //     <p>
  //       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi a
  //       tenetur, recusandae vitae magnam labore perspiciatis inventore,
  //       voluptatibus, ut voluptatum accusantium. Ullam tenetur dolorum placeat
  //       reiciendis dolores? Non fuga voluptates, unde iste deleniti laboriosam
  //       saepe hic tempore nisi impedit tenetur placeat nihil ea rem maxime,
  //       incidunt sit obcaecati quo asperiores.
  //     </p>
  //     <p id="gotohere" className="bg-red-400">
  //       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi a
  //       tenetur, recusandae vitae magnam labore perspiciatis inventore,
  //       voluptatibus, ut voluptatum accusantium. Ullam tenetur dolorum placeat
  //       reiciendis dolores? Non fuga voluptates, unde iste deleniti laboriosam
  //       saepe hic tempore nisi impedit tenetur placeat nihil ea rem maxime,
  //       incidunt sit obcaecati quo asperiores.
  //     </p>
  //     <p>
  //       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi a
  //       tenetur, recusandae vitae magnam labore perspiciatis inventore,
  //       voluptatibus, ut voluptatum accusantium. Ullam tenetur dolorum placeat
  //       reiciendis dolores? Non fuga voluptates, unde iste deleniti laboriosam
  //       saepe hic tempore nisi impedit tenetur placeat nihil ea rem maxime,
  //       incidunt sit obcaecati quo asperiores.
  //     </p>
  //     <p>
  //       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi a
  //       tenetur, recusandae vitae magnam labore perspiciatis inventore,
  //       voluptatibus, ut voluptatum accusantium. Ullam tenetur dolorum placeat
  //       reiciendis dolores? Non fuga voluptates, unde iste deleniti laboriosam
  //       saepe hic tempore nisi impedit tenetur placeat nihil ea rem maxime,
  //       incidunt sit obcaecati quo asperiores.
  //     </p>
  //     <p>
  //       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi a
  //       tenetur, recusandae vitae magnam labore perspiciatis inventore,
  //       voluptatibus, ut voluptatum accusantium. Ullam tenetur dolorum placeat
  //       reiciendis dolores? Non fuga voluptates, unde iste deleniti laboriosam
  //       saepe hic tempore nisi impedit tenetur placeat nihil ea rem maxime,
  //       incidunt sit obcaecati quo asperiores.
  //     </p>
  //   </div>
  // );
}
