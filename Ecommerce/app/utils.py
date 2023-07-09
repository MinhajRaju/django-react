from django.utils.text import slugify



def unique_slug_geneator(instance , new_slug=None):


    if new_slug is not None:
        slug = new_slug
        return slug
    else:
        slug = slugify(instance.title)
        return slug

    product = instance.__class__

    slug_exists = product.objects.filter(slug=slug).exists()
    print(slug_exists)

    if slug_exists:
        update_slug = slugify(instance.title)
        return unique_slug_geneator(instance , new_slug=update_slug)
