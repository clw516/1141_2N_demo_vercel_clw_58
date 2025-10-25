import { createBrowserRouter, RouterProvider } from 'react-router';

import {
  HomeLayoutPage_58,
  HomePage_58,
  BlogStaticPage_58,
  BlogLocalJsonPage_58,
  BlogNodePage_58,
  BookListPage_58,
} from './pages';

import {
  T11_ErrorExamplePage_58,
  T12_UseStateBasicsPage_58,
} from './pages/tutorials';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayoutPage_58 />,
    children: [
      {
        index: true,
        element: <HomePage_58 />,
      },
      {
        path: 'static_58',
        element: <BlogStaticPage_58 />,
      },
      {
        path: 'localjson_58',
        element: <BlogLocalJsonPage_58 />,
      },
      {
        path: 'node_58',
        element: <BlogNodePage_58 />,
      },
      {
        path: 'booklist_58',
        element: <BookListPage_58 />,
      },
    ],
  },
  {
    path: '/tutorials',
    element: <HomeLayoutPage_58 />,
    children: [
      {
        index: true,
        element: <HomePage_58 />,
      },
      {
        path: 't11_xx',
        element: <T11_ErrorExamplePage_58 />,
      },
      {
        path: 't12_xx',
        element: <T12_UseStateBasicsPage_58 />,
      },
    ],
  },
]);

const App_58 = () => {
  return <RouterProvider router={router} />;
};

export default App_58;
