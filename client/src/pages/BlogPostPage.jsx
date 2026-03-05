import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/seo/SEO';
import Breadcrumb from '../components/layout/Breadcrumb';
import {
  getBlogPostSEO,
  getBlogPostStructuredData,
  getBreadcrumbStructuredData,
} from '../utils/seo';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { paths } from '../utils/routes';
import { getBlogPostByPath } from '../data/blogPosts';

export default function BlogPostPage({ path }) {
  const { t } = useTranslation();
  if (!path) return null;

  const post = getBlogPostByPath(path);
  if (!post) return null;

  const seo = getBlogPostSEO(post);
  const postUrl = `/${post.path}`;
  const breadcrumbs = [
    { name: t('nav.home'), url: paths.home },
    { name: t('nav.blog'), url: paths.blog },
    { name: post.title, url: postUrl },
  ];

  return (
    <>
      <SEO
        {...seo}
        structuredData={[
          getBreadcrumbStructuredData(breadcrumbs),
          getBlogPostStructuredData(post),
        ].filter(Boolean)}
      />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={breadcrumbs} />
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-6">
            {post.title}
          </h1>
          <p className="text-xl text-text-muted leading-relaxed mb-8">
            {post.excerpt}
          </p>

          <div className="space-y-8 mb-12">
            {post.sections?.map((section, index) => (
              <section key={index} aria-labelledby={`blog-section-${index}`}>
                <h2 id={`blog-section-${index}`} className="text-2xl font-display font-bold text-text-primary mb-4">
                  {section.heading}
                </h2>
                <div className="space-y-4">
                  {section.content?.map((block, i) => {
                    if (block.type === 'paragraph') {
                      return (
                        <p key={i} className="text-text-primary leading-relaxed">
                          {block.text}
                        </p>
                      );
                    }
                    if (block.type === 'list') {
                      return (
                        <ul key={i} className="list-disc list-inside space-y-2 text-text-primary pl-2">
                          {block.items?.map((item, j) => (
                            <li key={j} className="leading-relaxed">
                              {item}
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    return null;
                  })}
                </div>
              </section>
            ))}
          </div>

          <Card className="bg-accent/10 border-accent/30">
            <p className="text-text-primary mb-4">
              {t('blogPost.ctaText')}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to={paths.trades}>
                <Button>{t('blogPost.browseTrades')}</Button>
              </Link>
              <Link to={paths.practiceTests}>
                <Button variant="outline">{t('blogPost.tryPracticeTests')}</Button>
              </Link>
            </div>
          </Card>
        </article>
      </main>
    </>
  );
}
