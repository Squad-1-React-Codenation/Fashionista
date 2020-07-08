import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

import NotFound from "../NotFound";

type PageType = {
  title: string;
  description: string;
  content: string;
};

const ContentPage = () => {
  const { page } = useParams();
  const { t } = useTranslation();

  const [loading, setLoading] = useState<null | boolean>(null);
  const [error, setError] = useState<unknown>(null);
  const [pageData, setPageData] = useState<PageType | null>(null);

  useEffect(() => {
    setLoading(true);

    const getPage = async () => {
      try {
        const response = await fetch(
          `/content/${t("lang").split("-")[0].toLowerCase()}-${page}.json`
        );

        setPageData(await response.json());
        setError(false);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getPage();
  }, [page, t]);

  if (loading) {
    return <div>Loading</div>;
  }

  if (error || !pageData) {
    return <NotFound />;
  }

  return (
    <>
      <Helmet>
        <title>{pageData.title}</title>
        {pageData.description && (
          <meta name="description" content={pageData.description} />
        )}
      </Helmet>
      <ReactMarkdown
        className="markdown"
        source={pageData.content}
        escapeHtml={false}
      />
    </>
  );
};

export default ContentPage;
