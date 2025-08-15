import Image from "next/image";
import Link from "next/link";

type PostCoverImageProps = {
  imageProps: React.ComponentProps<typeof Image>;
  linkProps: React.ComponentProps<typeof Link>;
};

function PostCoverImage({ imageProps, linkProps }: PostCoverImageProps) {
  return (
    <Link
      {...linkProps}
      className={`w-full h-full overflow-hidden rounded-xl ${linkProps.className}`}
    >
      <Image
        className={`w-full h-full object-cover object-center group-hover:scale-105 transition ${imageProps.className}}`}
        {...imageProps}
        alt={imageProps.alt}
      />
    </Link>
  );
}

export default PostCoverImage;
